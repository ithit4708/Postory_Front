import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import MetaDataSC from '../../atoms/User/MetaDataSC';

const PostMetaDataSC = styled.div`
  display: flex;
  gap: 8px;
`;

export default function PostMetaData() {
  return (
    <PostMetaDataSC>
      <MetaDataSC>
        <AiOutlineEye size={16} />
        조회수
      </MetaDataSC>
      <MetaDataSC>
        <AiOutlineHeart size={14} />
        좋아요수
      </MetaDataSC>
      <MetaDataSC>날짜</MetaDataSC>
    </PostMetaDataSC>
  );
}
