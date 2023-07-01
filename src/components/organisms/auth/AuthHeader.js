import { useLocation } from 'react-router-dom';
import { HeaderSC } from '../general/Header';
import PostoryLogo from '../../atoms/Logos/PostoryLogo';
import BtnLinkSC from '../../atoms/Link/BtnLinkSC';
import BlueBtnLinkSC from '../../atoms/Link/BlueBtnLinkSC';

export default function AuthHeader() {
  const { pathname } = useLocation();
  return (
    <HeaderSC>
      <div className="container">
        {pathname === '/email/auth' ? <PostoryLogo disable /> : <PostoryLogo />}
        {pathname === '/signup' && <BtnLinkSC to="/login">로그인</BtnLinkSC>}
        {pathname === '/login' && (
          <BlueBtnLinkSC to="/signup">회원가입</BlueBtnLinkSC>
        )}
        {pathname === '/email/auth' && (
          <BtnLinkSC to="/logout">로그아웃</BtnLinkSC>
        )}
      </div>
    </HeaderSC>
  );
}
