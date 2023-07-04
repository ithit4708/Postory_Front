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

export default function UserBanner({ post }) {
  return (
    <UserBannerSC>
      <Link to={`/profile/${post.nic}`}>
        <UserImg src={post.userImgPath} />
      </Link>
      <div className="nextImg">
        <Link to={`/profile/${post.nic}`}>
          <UserBannerNicSC>{post.nic}</UserBannerNicSC>
        </Link>
        <PostMetaData post={post} />
      </div>
      <ScrapPostBtn isScrapped={post.isScraped} postId={post.postId} />
    </UserBannerSC>
  );
}
