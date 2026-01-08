import { useEffect, useState } from 'react';
import { supabase, FooterLink } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const CATEGORIES = ['community', 'connect', 'legal'];

export default function FooterManager() {
  const [links, setLinks] = useState<FooterLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<FooterLink | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    category: 'social',
    label: '',
    url: '',
  });

  const fetchLinks = async () => {
    const { data, error } = await supabase
      .from('footer_links')
      .select('*')
      .order('category')
      .order('display_order');

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    setLinks(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLinks();

    const channel = supabase
      .channel('footer-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'footer_links' }, fetchLinks)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const resetForm = () => {
    setFormData({
      category: 'social',
      label: '',
      url: '',
    });
    setSelectedLink(null);
  };

  const openEditDialog = (link: FooterLink) => {
    setSelectedLink(link);
    setFormData({
      category: link.category,
      label: link.label,
      url: link.url,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const linkData = {
      category: formData.category,
      label: formData.label,
      url: formData.url,
    };

    if (selectedLink) {
      const { error } = await supabase
        .from('footer_links')
        .update(linkData)
        .eq('id', selectedLink.id);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Link updated successfully' });
    } else {
      const categoryLinks = links.filter(l => l.category === formData.category);
      const { error } = await supabase.from('footer_links').insert([{
        ...linkData,
        display_order: categoryLinks.length,
      }]);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Link added successfully' });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this link?')) return;

    const { error } = await supabase.from('footer_links').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Success', description: 'Link deleted successfully' });
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'community': return 'Community';
      case 'connect': return 'Connect';
      case 'legal': return 'Legal';
      default: return category;
    }
  };

  const groupedLinks = CATEGORIES.reduce((acc, category) => {
    acc[category] = links.filter(l => l.category === category);
    return acc;
  }, {} as Record<string, FooterLink[]>);

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Footer Manager</h1>
          <p className="text-muted-foreground">Manage footer links and contact info</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Link
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedLink ? 'Edit Link' : 'Add Link'}</DialogTitle>
              <DialogDescription>
                {selectedLink ? 'Update link details' : 'Add a new footer link'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {getCategoryLabel(cat)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="label">Label *</Label>
                <Input
                  id="label"
                  placeholder="e.g., LinkedIn"
                  value={formData.label}
                  onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">URL *</Label>
                <Input
                  id="url"
                  placeholder="https://..."
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {selectedLink ? 'Update' : 'Add'} Link
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{getCategoryLabel(category)}</CardTitle>
              <CardDescription>
                {groupedLinks[category].length} link(s)
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Label</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {groupedLinks[category].map((link) => (
                    <TableRow key={link.id}>
                      <TableCell>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {link.label}
                        </a>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="icon" onClick={() => openEditDialog(link)}>
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => handleDelete(link.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {groupedLinks[category].length === 0 && (
                    <TableRow>
                      <TableCell colSpan={2} className="text-center py-4 text-muted-foreground">
                        No links in this category
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
