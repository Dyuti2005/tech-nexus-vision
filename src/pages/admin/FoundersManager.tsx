import { useEffect, useState } from 'react';
import { supabase, Founder } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

export default function FoundersManager() {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    image_url: '',
    linkedin_url: '',
  });

  const fetchFounders = async () => {
    const { data, error } = await supabase
      .from('founders')
      .select('*')
      .order('display_order');

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    setFounders(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFounders();

    const channel = supabase
      .channel('founders-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'founders' }, fetchFounders)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const resetForm = () => {
    setFormData({
      name: '',
      title: '',
      bio: '',
      image_url: '',
      linkedin_url: '',
    });
    setSelectedFounder(null);
  };

  const openEditDialog = (founder: Founder) => {
    setSelectedFounder(founder);
    setFormData({
      name: founder.name,
      title: founder.title || '',
      bio: founder.bio || '',
      image_url: founder.image_url || '',
      linkedin_url: founder.linkedin_url || '',
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const founderData = {
      name: formData.name,
      title: formData.title || null,
      bio: formData.bio || null,
      image_url: formData.image_url || null,
      linkedin_url: formData.linkedin_url || null,
    };

    if (selectedFounder) {
      const { error } = await supabase
        .from('founders')
        .update(founderData)
        .eq('id', selectedFounder.id);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Founder updated successfully' });
    } else {
      const { error } = await supabase.from('founders').insert([{
        ...founderData,
        display_order: founders.length,
      }]);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Founder added successfully' });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this founder?')) return;

    const { error } = await supabase.from('founders').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Success', description: 'Founder deleted successfully' });
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Founders Manager</h1>
          <p className="text-muted-foreground">Manage founder profiles</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Founder
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedFounder ? 'Edit Founder' : 'Add Founder'}</DialogTitle>
              <DialogDescription>
                {selectedFounder ? 'Update founder details' : 'Add a new founder profile'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title/Role</Label>
                <Input
                  id="title"
                  placeholder="Co-Founder & CEO"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image_url">Photo URL</Label>
                <Input
                  id="image_url"
                  placeholder="https://..."
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                <Input
                  id="linkedin_url"
                  placeholder="https://linkedin.com/in/..."
                  value={formData.linkedin_url}
                  onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {selectedFounder ? 'Update' : 'Add'} Founder
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {founders.map((founder) => (
          <Card key={founder.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  {founder.image_url ? (
                    <img
                      src={founder.image_url}
                      alt={founder.name}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-muted-foreground">
                      {founder.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{founder.name}</h3>
                  {founder.title && (
                    <p className="text-sm text-muted-foreground">{founder.title}</p>
                  )}
                </div>
              </div>
              {founder.bio && (
                <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                  {founder.bio}
                </p>
              )}
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="ghost" size="sm" onClick={() => openEditDialog(founder)}>
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDelete(founder.id)}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        {founders.length === 0 && (
          <Card className="col-span-full">
            <CardContent className="py-8 text-center text-muted-foreground">
              No founders added yet. Click "Add Founder" to get started.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
