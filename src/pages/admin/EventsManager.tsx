import { useEffect, useState, useRef } from 'react';
import { supabase, Event, Speaker } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Users, Upload, X, Image as ImageIcon } from 'lucide-react';

export default function EventsManager() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSpeakersOpen, setIsSpeakersOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    date_str: '',
    location: '',
    venue: '',
    attendees: '',
    description: '',
    highlights: '',
    image_url: '',
    meetup_link: '',
    is_upcoming: false,
  });

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    setEvents(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvents();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('events-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, () => {
        fetchEvents();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      date_str: '',
      location: '',
      venue: '',
      attendees: '',
      description: '',
      highlights: '',
      image_url: '',
      meetup_link: '',
      is_upcoming: false,
    });
    setSelectedEvent(null);
    setImagePreview(null);
  };

  const openEditDialog = (event: Event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      date_str: event.date_str,
      location: event.location,
      venue: event.venue || '',
      attendees: event.attendees || '',
      description: event.description || '',
      highlights: event.highlights?.join('\n') || '',
      image_url: event.image_url || '',
      meetup_link: event.meetup_link || '',
      is_upcoming: event.is_upcoming || false,
    });
    setImagePreview(event.image_url || null);
    setIsDialogOpen(true);
  };

  const handleImageUpload = async (file: File) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({ title: 'Error', description: 'Please upload an image file', variant: 'destructive' });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: 'Error', description: 'Image must be less than 5MB', variant: 'destructive' });
      return;
    }

    setIsUploading(true);

    try {
      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `events/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('event-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('event-images')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: publicUrl });
      setImagePreview(publicUrl);
      toast({ title: 'Success', description: 'Image uploaded successfully' });
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({ title: 'Error', description: error.message || 'Failed to upload image', variant: 'destructive' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image_url: '' });
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const eventData = {
      title: formData.title,
      date: formData.date,
      date_str: formData.date_str,
      location: formData.location,
      venue: formData.venue || null,
      attendees: formData.attendees || null,
      description: formData.description || null,
      highlights: formData.highlights.split('\n').filter(Boolean),
      image_url: formData.image_url || null,
      meetup_link: formData.meetup_link || null,
      is_upcoming: formData.is_upcoming,
    };

    if (selectedEvent) {
      const { error } = await supabase
        .from('events')
        .update(eventData)
        .eq('id', selectedEvent.id);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Event updated successfully' });
    } else {
      const { error } = await supabase.from('events').insert([eventData]);

      if (error) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        return;
      }

      toast({ title: 'Success', description: 'Event created successfully' });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    const { error } = await supabase.from('events').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Success', description: 'Event deleted successfully' });
  };

  const fetchSpeakers = async (eventId: string) => {
    const { data, error } = await supabase
      .from('speakers')
      .select('*')
      .eq('event_id', eventId)
      .order('created_at');

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    setSpeakers(data || []);
  };

  const openSpeakersDialog = (event: Event) => {
    setSelectedEvent(event);
    fetchSpeakers(event.id);
    setIsSpeakersOpen(true);
  };

  const [speakerForm, setSpeakerForm] = useState({ name: '', topic: '', time: '' });

  const addSpeaker = async () => {
    if (!selectedEvent || !speakerForm.name) return;

    const { error } = await supabase.from('speakers').insert([{
      event_id: selectedEvent.id,
      name: speakerForm.name,
      topic: speakerForm.topic || null,
      time: speakerForm.time || null,
    }]);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    setSpeakerForm({ name: '', topic: '', time: '' });
    fetchSpeakers(selectedEvent.id);
    toast({ title: 'Success', description: 'Speaker added' });
  };

  const deleteSpeaker = async (id: string) => {
    const { error } = await supabase.from('speakers').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      return;
    }

    if (selectedEvent) fetchSpeakers(selectedEvent.id);
    toast({ title: 'Success', description: 'Speaker removed' });
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Events Manager</h1>
          <p className="text-muted-foreground">Manage all community events</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
              <DialogDescription>
                {selectedEvent ? 'Update event details' : 'Create a new community event'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date_str">Display Date *</Label>
                  <Input
                    id="date_str"
                    placeholder="e.g., January 25, 2025"
                    value={formData.date_str}
                    onChange={(e) => setFormData({ ...formData, date_str: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Chennai"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="venue">Venue</Label>
                  <Input
                    id="venue"
                    placeholder="e.g., Microsoft Office"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attendees">Attendees</Label>
                  <Input
                    id="attendees"
                    placeholder="e.g., 200+"
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="highlights">Highlights (one per line)</Label>
                <Textarea
                  id="highlights"
                  rows={4}
                  placeholder="Session 1&#10;Session 2&#10;Session 3"
                  value={formData.highlights}
                  onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                />
              </div>

              {/* Image Upload Section */}
              <div className="space-y-2">
                <Label>Event Image</Label>
                <div className="space-y-3">
                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="relative w-full h-40 rounded-lg overflow-hidden border bg-muted">
                      <img 
                        src={imagePreview} 
                        alt="Event preview" 
                        className="w-full h-full object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={removeImage}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Upload Button */}
                  {!imagePreview && (
                    <div 
                      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {isUploading ? (
                          <>
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            <p className="text-sm text-muted-foreground">Uploading...</p>
                          </>
                        ) : (
                          <>
                            <ImageIcon className="h-8 w-8 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">Click to upload an image</p>
                            <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />

                  {/* Or use URL */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border"></div>
                    <span className="text-xs text-muted-foreground">or enter URL</span>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>

                  <Input
                    id="image_url"
                    placeholder="https://..."
                    value={formData.image_url}
                    onChange={(e) => {
                      setFormData({ ...formData, image_url: e.target.value });
                      setImagePreview(e.target.value || null);
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meetup_link">Meetup/Registration Link</Label>
                <Input
                  id="meetup_link"
                  placeholder="https://..."
                  value={formData.meetup_link}
                  onChange={(e) => setFormData({ ...formData, meetup_link: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  id="is_upcoming"
                  checked={formData.is_upcoming}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_upcoming: checked })}
                />
                <Label htmlFor="is_upcoming">Upcoming Event</Label>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {selectedEvent ? 'Update' : 'Create'} Event
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>{event.date_str}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${event.is_upcoming ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {event.is_upcoming ? 'Upcoming' : 'Past'}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openSpeakersDialog(event)}
                      >
                        <Users className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(event)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(event.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {events.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No events found. Create your first event!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Speakers Dialog */}
      <Dialog open={isSpeakersOpen} onOpenChange={setIsSpeakersOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Manage Speakers</DialogTitle>
            <DialogDescription>
              {selectedEvent?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Add Speaker</Label>
              <div className="grid grid-cols-3 gap-2">
                <Input
                  placeholder="Name"
                  value={speakerForm.name}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, name: e.target.value })}
                />
                <Input
                  placeholder="Topic"
                  value={speakerForm.topic}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, topic: e.target.value })}
                />
                <Input
                  placeholder="Time"
                  value={speakerForm.time}
                  onChange={(e) => setSpeakerForm({ ...speakerForm, time: e.target.value })}
                />
              </div>
              <Button onClick={addSpeaker} className="w-full">Add Speaker</Button>
            </div>

            <div className="space-y-2">
              {speakers.map((speaker) => (
                <div key={speaker.id} className="flex items-center justify-between p-2 bg-muted rounded">
                  <div>
                    <p className="font-medium">{speaker.name}</p>
                    <p className="text-sm text-muted-foreground">{speaker.topic}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => deleteSpeaker(speaker.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ))}
              {speakers.length === 0 && (
                <p className="text-center text-muted-foreground py-4">No speakers added</p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
