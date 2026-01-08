import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Lock, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type AuthMode = 'signin' | 'signup' | 'reset';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<AuthMode>('signin');
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (mode === 'reset') {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin`,
      });

      if (error) {
        toast({
          title: 'Reset Failed',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Reset Email Sent',
          description: 'Check your email for a password reset link.',
        });
        setMode('signin');
      }
      setIsLoading(false);
      return;
    }

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) {
        toast({
          title: 'Sign Up Failed',
          description: error.message,
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      toast({
        title: 'Account Created',
        description: 'You can now sign in with your credentials.',
      });
      setMode('signin');
      setIsLoading(false);
      return;
    }

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        title: 'Login Failed',
        description: error.message,
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: 'Login Successful',
      description: 'Redirecting to dashboard...',
    });

    navigate('/admin/dashboard');
  };

  const getTitle = () => {
    switch (mode) {
      case 'signup': return 'Create Account';
      case 'reset': return 'Reset Password';
      default: return 'Admin Portal';
    }
  };

  const getDescription = () => {
    switch (mode) {
      case 'signup': return 'Create your admin account';
      case 'reset': return 'Enter your email to receive a reset link';
      default: return 'Sign in to access the TechNexus CMS';
    }
  };

  const getButtonText = () => {
    if (isLoading) {
      switch (mode) {
        case 'signup': return 'Creating account...';
        case 'reset': return 'Sending...';
        default: return 'Signing in...';
      }
    }
    switch (mode) {
      case 'signup': return 'Create Account';
      case 'reset': return 'Send Reset Link';
      default: return 'Sign In';
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        <CardHeader className="text-center">
          {mode !== 'signin' && (
            <button
              type="button"
              onClick={() => setMode('signin')}
              className="absolute left-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">{getTitle()}</CardTitle>
          <CardDescription>{getDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@technexus.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {mode !== 'reset' && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {getButtonText()}
            </Button>
          </form>
          <div className="mt-4 space-y-2 text-center">
            {mode === 'signin' && (
              <>
                <button
                  type="button"
                  className="text-sm text-muted-foreground hover:text-primary underline block w-full"
                  onClick={() => setMode('reset')}
                >
                  Forgot your password?
                </button>
                <button
                  type="button"
                  className="text-sm text-muted-foreground hover:text-primary underline block w-full"
                  onClick={() => setMode('signup')}
                >
                  Don't have an account? Sign up
                </button>
              </>
            )}
            {mode === 'signup' && (
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-primary underline"
                onClick={() => setMode('signin')}
              >
                Already have an account? Sign in
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
