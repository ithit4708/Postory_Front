import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Logout() {
  const { onLogout } = useAuth();

  useEffect(() => {
    console.log('로그아웃 실행');
    onLogout();
  }, []);

  return null;
}
