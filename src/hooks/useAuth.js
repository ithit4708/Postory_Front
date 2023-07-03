import { useEffect } from 'react';
import useUserStore from '../stores/useUserStore';
import { useNavigate } from 'react-router-dom';
import useUserChannelStore from '../stores/useUserChannelStore';

export default function useAuth() {
  const { user, setUser } = useUserStore();
  const { channels, setChannels } = useUserChannelStore();
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 사용자 정보 읽어오기
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      if (parsedUser.userStusCd === 'ST00110') {
        navigate('/email/auth');
      }
    }

    const storedChannels = localStorage.getItem('channels');
    if (storedChannels) {
      setChannels(JSON.parse(storedChannels));
    }
  }, []);

  const onLogin = (data) => {
    const loggedInUser = {
      eid: data.user.eid,
      nic: data.user.nic,
      userImgPath: data.user.userImgPath,
      userStusCd: data.user.userStusCd,
    };
    const token = data.user.token;

    localStorage.setItem('accessToken', token);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    if (loggedInUser.userStusCd !== 'ST00110') {
      localStorage.setItem('channels', JSON.stringify(data.channel));
      setChannels(data.user.channel);
      navigate('/');
    } else {
      navigate('/email/auth');
    }
  };

  const onEmailAuth = () => {
    const authUser = { ...user, userStusCd: 'ST00120' };
    localStorage.setItem('user', JSON.stringify(authUser));
    setUser(authUser);
    localStorage.setItem('channels', JSON.stringify([]));
    navigate('/');
  };

  const onLogout = () => {
    // 로컬 스토리지에서 사용자 정보 제거
    localStorage.clear();
    setUser(null);
    setChannels([]);
    navigate('/login');
  };

  const onSignup = () => {
    navigate('/login');
  };

  return {
    user,
    channels,
    onSignup,
    onLogin,
    onLogout,
    onEmailAuth,
    setUser,
    setChannels,
  };
}
