import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) return <main className="page-shell"><p>Loading...</p></main>;
  if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  if (requireAdmin && profile?.role !== 'admin') return <Navigate to="/portal" replace />;

  return children;
}
