-- Force RLS on user_roles table even for table owners
ALTER TABLE public.user_roles FORCE ROW LEVEL SECURITY;