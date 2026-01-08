import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import ProtectedRoute from './ProtectedRoute';

export default function AdminLayout() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <AdminSidebar />
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
}
