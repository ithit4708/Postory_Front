import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import MetaDataSC from '../../atoms/User/MetaDataSC';
import { countDate } from './dateConversion';

const PostMetaDataSC = styled.div`
  display: flex;
  gap: 8px;
`;

export default function PostMetaData({ post }) {
  return (
    <PostMetaDataSC>
      <MetaDataSC>
        <AiOutlineEye size={16} />
        {post.postInqrCnt}
      </MetaDataSC>
      <MetaDataSC>
        <AiOutlineHeart size={14} />
        {post.postLikCnt}
      </MetaDataSC>
      <MetaDataSC>{countDate(post.postPblcDtm)}</MetaDataSC>
    </PostMetaDataSC>
  );
}
