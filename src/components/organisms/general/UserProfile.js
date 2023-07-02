import styled from 'styled-components';
import useUserStore from '../../../stores/useUserStore';
import BtnLinkSC from '../../atoms/Link/BtnLinkSC';
import UserImg from '../../atoms/User/UserImg';
import { bodyChar } from '../../styled/utilsProps';

const CenterSC = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  h5 {
    font-size: 20px;
  }

  p {
    ${bodyChar}
  }
`;

export default function UserProfile(profileUser) {
  const { isLoggedIn, user } = useUserStore();

  return (
    <CenterSC>
      <div className="profile">
        <UserImg src={profileUser.userImgPath} size={100} />
        <h5>{profileUser.nic}</h5>
        <p>{profileUser?.userIntro}</p>

        <BtnLinkSC to="#">
          {isLoggedIn && profileUser.userId === user.userId
            ? '프로필 수정'
            : '메시지 전송'}
        </BtnLinkSC>
      </div>
    </CenterSC>
  );
}
