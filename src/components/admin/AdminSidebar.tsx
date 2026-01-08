import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Users,
  Link as LinkIcon,
  LogOut,
  Settings,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Events', href: '/admin/events', icon: Calendar },
  { label: 'Content', href: '/admin/content', icon: FileText },
  { label: 'Founders', href: '/admin/founders', icon: Users },
  { label: 'Footer Links', href: '/admin/footer', icon: LinkIcon },
];

export default function AdminSidebar() {
  const location = useLocation();
  const { signOut, user } = useAuth();

  return (
    <div className="w-64 bg-card border-r min-h-screen flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-primary">TechNexus</h1>
        <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t space-y-2">
        <Link
          to="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Settings className="w-5 h-5" />
          View Site
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={signOut}
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
