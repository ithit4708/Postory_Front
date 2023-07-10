import styled from 'styled-components';
import useUserStore from '../../../stores/useUserStore';
import { useParams } from 'react-router-dom';
import { useApiGet } from '../../../hooks/useApi';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ViewTemplate from '../../../components/templates/general/ViewTemplate';
import BtnLinkSC from '../../../components/atoms/Link/BtnLinkSC';
import { useNavigate } from 'react-router';
import LikeBtn from '../../../components/molecules/post/LikeBtn';



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

const ChannelInfo = styled.div`
  font-size: 40px;
  font-weight: 600;
`

const PostSbTtl = styled.div`
  color: dimgray;
  font-size: 18px;
`


export default function PostView() {
  const { user } = useUserStore();
  const { chnlUri, postId } = useParams();
  const { data, isLoading, error } = useApiGet(
    `/post/${postId}`,
    [chnlUri, postId]
  );
  console.log(user);

  // const {data: likeData, isLoading: likeIsLoading, error: likeErr} = useApiGet(
  //   `/post/${postId}/like/${user.nic}`,[]
  // );

  const navigate = useNavigate();

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  if (!data) {
    return null;
  }

  const isOwner = user.nic === data.writer.nic;


  const goProfile = (nic) =>{
    navigate(`/profile/${nic}`);
  }
  const goChannel = (chnlUri) => {
    navigate(`/channel/${data.channel.chnlUri}`);
  }


  return (
    <ViewTemplate>
      <ChannelInfo onClick={() => goChannel(data.channel.chnlUri)}>
        {data.channel.chnlTtl} 채널
      </ChannelInfo>
      <div>
        <PostViewHeader>
          <h1>{data.post.postTtl}</h1>
          <PostSbTtl>
            {data.post.postSbTtl}
          </PostSbTtl>
          <PostViewHeaderBottom>
            <div>
              <RoundThumnail imageUrl={data.writer.userImgPath} onClick={() => goProfile(data.writer.nic)}></RoundThumnail>
            </div>
            <div>
              <span>{data.writer.nic}</span>
              <PostInfo>
                {data.post.postPblcDtm} / 조회 {data.post.postInqrCnt}
              </PostInfo>
            </div>
          </PostViewHeaderBottom>

        <PostEditButtonContainer>
          {/*{ isOwner ?*/}
          {/*<LikeBtn liked={likeData.isLiked} postId={postId}></LikeBtn>: ''*/}
          {/*}*/}
          <BtnLinkSC to={`/${data.channel.chnlUri}/post/create?postId=${postId}`}>수정하기</BtnLinkSC>
        </PostEditButtonContainer>
        </PostViewHeader>
        <PostViewBody dangerouslySetInnerHTML={{__html: data.post.postContent}}>
        </PostViewBody>

      </div>
    </ViewTemplate>
  );
}
