import { useEffect, useState } from 'react';
import { supabase, SiteContent, TechHub } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Save } from 'lucide-react';

export default function ContentManager() {
  const [aboutContent, setAboutContent] = useState({
    heading: '',
    subheading: '',
    description: '',
  });
  const [communityStats, setCommunityStats] = useState({
    members: '',
    events: '',
    speakers: '',
    cities: '',
  });
  const [techHubs, setTechHubs] = useState<TechHub[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHubDialogOpen, setIsHubDialogOpen] = useState(false);
  const [selectedHub, setSelectedHub] = useState<TechHub | null>(null);
  const [hubForm, setHubForm] = useState({ title: '', description: '', icon: '' });
  const { toast } = useToast();

  const fetchContent = async () => {
    // Fetch about section
    const { data: aboutData } = await supabase
      .from('site_content')
      .select('*')
      .eq('section', 'about')
      .maybeSingle();

    if (aboutData?.content) {
      const content = aboutData.content as Record<string, string>;
      setAboutContent({
        heading: content.heading || '',
        subheading: content.subheading || '',
        description: content.description || '',
      });
    }

    // Fetch community stats
    const { data: statsData } = await supabase
      .from('site_content')
      .select('*')
      .eq('section', 'community_stats')
      .maybeSingle();

    if (statsData?.content) {
      const content = statsData.content as Record<string, string>;
      setCommunityStats({
        members: content.members || '',
        events: content.events || '',
        speakers: content.speakers || '',
        cities: content.cities || '',
      });
    }

    // Fetch tech hubs
    const { data: hubsData } = await supabase
      .from('tech_hubs')
      .select('*')
      .order('display_order');

    setTechHubs(hubsData || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContent();

    const channel = supabase
      .channel('content-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'site_content' }, fetchContent)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tech_hubs' }, fetchContent)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const saveAboutContent = async () => {
    const { error } = await supabase
      .from('site_content')
      .upsert({
        section: 'about',
        content: aboutContent,
      }, { onConflict: 'section' });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Success', description: 'About section updated' });
  };

  const saveCommunityStats = async () => {
    const { error } = await supabase
      .from('site_content')
      .upsert({
        section: 'community_stats',
        content: communityStats,
      }, { onConflict: 'section' });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Success', description: 'Community stats updated' });
  };

  const openHubEdit = (hub: TechHub) => {
    setSelectedHub(hub);
    setHubForm({
      title: hub.title,
      description: hub.description || '',
      icon: hub.icon || '',
    });
    setIsHubDialogOpen(true);
  };

  const resetHubForm = () => {
    setSelectedHub(null);
    setHubForm({ title: '', description: '', icon: '' });
  };

  const saveHub = async () => {
    if (!hubForm.title) return;

    if (selectedHub) {
      const { error } = await supabase
        .from('tech_hubs')
        .update({
          title: hubForm.title,
          description: hubForm.description || null,
          icon: hubForm.icon || null,
        })
        .eq('id', selectedHub.id);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Tech hub updated' });
    } else {
      const { error } = await supabase.from('tech_hubs').insert([{
        title: hubForm.title,
        description: hubForm.description || null,
        icon: hubForm.icon || null,
        display_order: techHubs.length,
      }]);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Tech hub created' });
    }

    setIsHubDialogOpen(false);
    resetHubForm();
  };

  const deleteHub = async (id: string) => {
    if (!confirm('Delete this tech hub?')) return;

    const { error } = await supabase.from('tech_hubs').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Success', description: 'Tech hub deleted' });
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Manager</h1>
        <p className="text-muted-foreground">Edit website content sections</p>
      </div>

      <Tabs defaultValue="about">
        <TabsList>
          <TabsTrigger value="about">About Section</TabsTrigger>
          <TabsTrigger value="stats">Community Stats</TabsTrigger>
          <TabsTrigger value="hubs">Tech Hubs</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>About Section</CardTitle>
              <CardDescription>Edit the main about section content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heading">Heading</Label>
                <Input
                  id="heading"
                  value={aboutContent.heading}
                  onChange={(e) => setAboutContent({ ...aboutContent, heading: e.target.value })}
                  placeholder="About TechNexus Community"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subheading">Subheading</Label>
                <Input
                  id="subheading"
                  value={aboutContent.subheading}
                  onChange={(e) => setAboutContent({ ...aboutContent, subheading: e.target.value })}
                  placeholder="Building India's Premier Tech Community"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={5}
                  value={aboutContent.description}
                  onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })}
                />
              </div>
              <Button onClick={saveAboutContent}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Statistics</CardTitle>
              <CardDescription>Update the community numbers displayed on the site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="members">Community Members</Label>
                  <Input
                    id="members"
                    value={communityStats.members}
                    onChange={(e) => setCommunityStats({ ...communityStats, members: e.target.value })}
                    placeholder="2000+"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="events">Events Hosted</Label>
                  <Input
                    id="events"
                    value={communityStats.events}
                    onChange={(e) => setCommunityStats({ ...communityStats, events: e.target.value })}
                    placeholder="50+"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="speakers">Expert Speakers</Label>
                  <Input
                    id="speakers"
                    value={communityStats.speakers}
                    onChange={(e) => setCommunityStats({ ...communityStats, speakers: e.target.value })}
                    placeholder="100+"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cities">Cities Covered</Label>
                  <Input
                    id="cities"
                    value={communityStats.cities}
                    onChange={(e) => setCommunityStats({ ...communityStats, cities: e.target.value })}
                    placeholder="10+"
                  />
                </div>
              </div>
              <Button onClick={saveCommunityStats}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hubs" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tech Hub Cards</CardTitle>
                <CardDescription>Manage the technology hub cards</CardDescription>
              </div>
              <Dialog open={isHubDialogOpen} onOpenChange={(open) => { setIsHubDialogOpen(open); if (!open) resetHubForm(); }}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Hub
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{selectedHub ? 'Edit Tech Hub' : 'Add Tech Hub'}</DialogTitle>
                    <DialogDescription>
                      {selectedHub ? 'Update tech hub details' : 'Create a new tech hub card'}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="hubTitle">Title</Label>
                      <Input
                        id="hubTitle"
                        value={hubForm.title}
                        onChange={(e) => setHubForm({ ...hubForm, title: e.target.value })}
                        placeholder="Cloud Computing"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hubDescription">Description</Label>
                      <Textarea
                        id="hubDescription"
                        value={hubForm.description}
                        onChange={(e) => setHubForm({ ...hubForm, description: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hubIcon">Icon (Lucide icon name)</Label>
                      <Input
                        id="hubIcon"
                        value={hubForm.icon}
                        onChange={(e) => setHubForm({ ...hubForm, icon: e.target.value })}
                        placeholder="Cloud"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsHubDialogOpen(false)}>Cancel</Button>
                      <Button onClick={saveHub}>{selectedHub ? 'Update' : 'Create'}</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Icon</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {techHubs.map((hub) => (
                    <TableRow key={hub.id}>
                      <TableCell className="font-medium">{hub.title}</TableCell>
                      <TableCell className="max-w-xs truncate">{hub.description}</TableCell>
                      <TableCell>{hub.icon}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => openHubEdit(hub)}>
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => deleteHub(hub.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {techHubs.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                        No tech hubs found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
