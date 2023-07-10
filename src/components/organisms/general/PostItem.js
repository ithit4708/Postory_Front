import styled from 'styled-components';
import PostSerTitle from '../../atoms/Post/PostSerTitleSC';
import PostBanner from '../../molecules/post/PostBanner';
import UserBanner from '../../molecules/user/UserBanner';
import { useNavigate } from 'react-router';

const PostItemSC = styled.div`
  & + & {
    border-top: 1px solid ${(p) => p.theme.color.line};
  }

  padding: 24px 12px;
`;

//썸네일 없으도 기본 이미지 보이게 했음
export default function PostItem({ post}) {
  const navigate = useNavigate();
  const goPost = () => {
    navigate(`/post/${post.postId}`);
    //조회수 올라가는 함수 필요
  };

  return (
    <PostItemSC>
      {post.serTtl && <PostSerTitle>{post.serTtl}</PostSerTitle>}
      <PostBanner post={post} onClick={goPost} />
      <UserBanner post={post} />
    </PostItemSC>
  );
}
