import styled from 'styled-components';
import useUserStore from '../../../stores/useUserStore';
import { useParams } from 'react-router-dom';
import { useApiGet } from '../../../hooks/useApi';
import CreateTemplate from '../../../components/templates/general/CreateTemplate';
import React, { useState } from 'react';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
import ViewTemplate from '../../../components/templates/general/ViewTemplate';
// 임시 데이터
// TODO: writer 값 실제 api data 값 대처
import data from '../../../postData.json';
import BtnLinkSC from '../../../components/atoms/Link/BtnLinkSC';


Quill.register('modules/imageResize', ImageResize);
export const SubmitButton = styled.button`
  display: block;
  width: fit-content;
  padding: 8px 30px;
  font-size: 15px;
  border-radius: 4px;
  font-weight: normal;
  color: white;
  background-color: #3478FF;
  border: 1px solid #3478FF;
`;

const RoundThumnail = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 60px;
  margin-right: 10px;
  display: inline-block;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  border: 1px solid rgba(0,0,0,.05);
  margin-right: 28px;
`;

const PostViewHeader = styled.div`
  padding: 40px 0 24px 0;
  border-bottom: 1px solid rgba(0,0,0,.05);
  
`

const PostViewHeaderBottom = styled.div`
  display: flex;
  margin-top: 32px;
`

const PostInfo = styled.div`
  color: rgba(0,0,0,.47);
  font-size: 14px;
`

const PostViewBody = styled.div`
  
`

const PostEditButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`


export default function PostView() {
  // const { user } = useUserStore();
  const { chnlUri, postId } = useParams();
  // const { data, isLoading, error } = useApiGet(
  //   `/channel/${encodeURIComponent(chnlUri)}`,
  //   [chnlUri]
  // );
  //
  // if (isLoading) return;
  // if (error) return <span>{`[${error.code}] ${error.message}`}</span>;
  //
  // if (!data) {
  //   return null;
  // }


  const myPostId = encodeURIComponent(postId);




  return (
    <ViewTemplate>
      <div>
        <PostViewHeader>
          <h2>{data.postTtl}</h2>
          <PostViewHeaderBottom>
            <div>
              <RoundThumnail imageUrl={data.writer.userImgPath}></RoundThumnail>
            </div>
            <div>
              <span>{data.writer.nic}</span>
              <PostInfo>
                {data.postPblcDtm} / 조회 {data.postInqrCnt}
              </PostInfo>
            </div>
          </PostViewHeaderBottom>

        <PostEditButtonContainer>
          <BtnLinkSC to={`/post/create?postId=${postId}`}>포스트 수정하기</BtnLinkSC>
        </PostEditButtonContainer>
        </PostViewHeader>
        <PostViewBody dangerouslySetInnerHTML={{__html: data.postContent}}>
        </PostViewBody>

      </div>
    </ViewTemplate>
  );
}
