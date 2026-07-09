import { Navigate } from 'react-router-dom';
import { useAdminAuth } from './useAdminAuth';

export default function ProtectedRoute({ children }) {
  const user = useAdminAuth();
  if (user === undefined) {
    return <div className="min-h-screen flex items-center justify-center text-text-dim font-mono text-sm">Loading…</div>;
  }
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}
