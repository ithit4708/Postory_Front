import styled from 'styled-components';
import PostSerTitle from '../../atoms/Post/PostSerTitleSC';
import PostBanner from '../../molecules/post/PostBanner';
import UserBanner from '../../molecules/user/UserBanner';

const PostItemSC = styled.div`
  & + & {
    border-top: 1px solid ${(p) => p.theme.color.line};
  }

  padding: 24px 12px;
`;

export default function PostItem({ post }) {
  return (
    <PostItemSC>
      {post.serTtl && <PostSerTitle>{post.serTtl}</PostSerTitle>}
      <PostBanner post={post} />
      <UserBanner />
    </PostItemSC>
  );
}
