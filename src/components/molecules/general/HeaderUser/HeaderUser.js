import useUserStore from '../../../../stores/useUserStore';
import BlueBtnLinkSC from '../../../atoms/Link/BlueBtnLinkSC';
import BtnLinkSC from '../../../atoms/Link/BtnLinkSC';
import UserDropdown from './UserDropdown';

export default function HeaderUser() {
  const { isLoggedIn } = useUserStore();
  return (
    <>
      {isLoggedIn ? (
        <UserDropdown />
      ) : (
        <>
          <BtnLinkSC to="/login">로그인</BtnLinkSC>
          <BlueBtnLinkSC to="/signup">회원가입</BlueBtnLinkSC>
        </>
      )}
    </>
  );
}
