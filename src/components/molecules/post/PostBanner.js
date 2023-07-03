import styled from 'styled-components';
import PostTitle from '../../atoms/Post/PostTitleSC';
import PostSubTitle from '../../atoms/Post/PostSubTitleSC';
import PostTextContent from '../../atoms/Post/PostTextContent';
import PostImg from '../../atoms/Post/PostImgSC';

const PostBannerSC = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .subAndText {
    line-height: 1.2em;
    height: 2.4em; /* Adjusts the height to show two lines only. Based on line-height of 1.2em */
    overflow: hidden;
    flex: 1;

    & > h4,
    & > p {
      display: inline;
    }
  }
`;

export default function PostBanner({ post }) {
  return (
    <PostBannerSC>
      <div className="text Info">
        <PostTitle>{post.postTtl}</PostTitle>
        <div className="subAndText">
          <PostSubTitle>{`${post.postSbTtl} | `}</PostSubTitle>
          <PostTextContent>{`포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text포스트 text 포스트 text포스트 text 포스트 text포스트 text 포스트 text포스트 text 포스트 text`}</PostTextContent>
        </div>
      </div>
      <PostImg />
    </PostBannerSC>
  );
}
