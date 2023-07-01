import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Logout() {
  const { onLogout } = useAuth();

  useEffect(() => {
    onLogout();
  }, []);

  return null;
}
