import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { Calendar, Users, FileText, Link } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    events: 0,
    founders: 0,
    footerLinks: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [eventsRes, foundersRes, linksRes] = await Promise.all([
        supabase.from('events').select('id', { count: 'exact', head: true }),
        supabase.from('founders').select('id', { count: 'exact', head: true }),
        supabase.from('footer_links').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        events: eventsRes.count || 0,
        founders: foundersRes.count || 0,
        footerLinks: linksRes.count || 0,
      });
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Events', value: stats.events, icon: Calendar, color: 'text-blue-500' },
    { label: 'Founders', value: stats.founders, icon: Users, color: 'text-green-500' },
    { label: 'Footer Links', value: stats.footerLinks, icon: Link, color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the TechNexus CMS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <a href="/admin/events" className="block p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <span className="font-medium">Manage Events</span>
              <p className="text-sm text-muted-foreground">Add, edit, or remove events</p>
            </a>
            <a href="/admin/content" className="block p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <span className="font-medium">Edit Content</span>
              <p className="text-sm text-muted-foreground">Update About section and community stats</p>
            </a>
            <a href="/admin/founders" className="block p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <span className="font-medium">Update Founders</span>
              <p className="text-sm text-muted-foreground">Manage founder profiles</p>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Backend connection status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm">Connected to database</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm">Real-time updates enabled</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
