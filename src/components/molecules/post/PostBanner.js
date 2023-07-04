import styled from 'styled-components';
import PostTitleSC from '../../atoms/Post/PostTitleSC';
import PostSubTitleSC from '../../atoms/Post/PostSubTitleSC';
import PostTextContentSC from '../../atoms/Post/PostTextContentSC';
import PostImg from '../../atoms/Post/PostImgSC';

const PostBannerSC = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  & * {
    cursor: pointer;
  }

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

export default function PostBanner({ onClick, post }) {
  return (
    <PostBannerSC>
      <div className="textInfo">
        <PostTitleSC onClick={onClick}>{post.postTtl}</PostTitleSC>
        <div className="subAndText">
          <PostSubTitleSC
            onClick={onClick}
          >{`${post.postSbTtl} | `}</PostSubTitleSC>
          {/* <PostTextContent>{`포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text 포스트 text포스트 text 포스트 text포스트 text 포스트 text포스트 text 포스트 text포스트 text 포스트 text`}</PostTextContent> */}
          <PostTextContentSC onClick={onClick}>
            {post.postContent}
          </PostTextContentSC>
        </div>
      </div>
      <PostImg src={post.postThumnPath} onClick={onClick} />
    </PostBannerSC>
  );
}
