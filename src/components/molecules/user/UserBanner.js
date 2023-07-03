import styled from 'styled-components';
import UserImg from '../../atoms/User/UserImg';
import { Link } from 'react-router-dom';
import UserBannerNicSC from '../../atoms/User/UserBannerNicSC';
import PostMetaData from './PostMetaData';
import ScrapPostBtn from './ScrapPostBtn';

const UserBannerSC = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 20px;
  padding-top: 20px;

  .nextImg {
    flex: 1;
  }

  a {
    display: flex;
    align-items: center;
  }
`;

export default function UserBanner({ userImgPath, nic, ...props }) {
  return (
    <UserBannerSC>
      <Link to={`/profile/${nic}`}>
        <UserImg src={userImgPath} />
      </Link>
      <div className="nextImg">
        <Link to={`/profile/${nic}`}>
          <UserBannerNicSC>세민</UserBannerNicSC>
        </Link>
        <PostMetaData />
      </div>
      <ScrapPostBtn />
    </UserBannerSC>
  );
}
