import styled from 'styled-components';
import ChannelTemplate from '../../../components/templates/general/ChannelTemplate';
import channelPostsData from '../../../tempData/channel/channelPosts.json';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.div`
  padding: 0 0 10px;
  color: #121212;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid rgba(0,0,0,.05);
  display: flex;
  justify-content: space-between;
`;

const SectionHeaderFilter = styled.div`
  color: rgba(0,0,0,.47);
  font-size: 14px;
  font-weight: 500;
`;


// const PostListContainer = styled.div`
// `;

// const PostListItem = styled.div`
//   display: flex;
//   margin: 10px;
//   background-color: #ffffff;
//   padding: 10px;
//   justify-content: space-between;
//   border-bottom: 1px solid rgba(0,0,0,.05);
//   font-weightL 500;
// `;

// const Thumbnail = styled.div`
//   width: 144px;
//   height: 108px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   margin-right: 10px;
//   display: inline-block;
//   background-image: url(${props => props.imageUrl});
//   background-size: cover;
// `;

const WebtoonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WebtoonListItem = styled.div`
  width: calc(33.33% - 10px); /* 33.33% width minus margin */
  margin-bottom: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-weight: 500;
`;

const WebtoonThumbnail = styled.div`
  width: 100%;
  height: 250px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-right: 10px;
  display: inline-block;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  border: 1px solid rgba(0,0,0,.05);
`;

const WebtoonSeriesTitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 4px;
  color: rgba(0,0,0,.54);
`;

const WebtoonTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 6px;
`;

const WebtoonSubInfo = styled.div`
  display: flex;
`;

const WebtoonWriter = styled.span`
  color: #000;
  font-size: 12px;
`;

const WebtoonCount = styled.span`
  margin-left: 8px;
  color: rgba(0,0,0,.47);
  font-size: 12px;

`;

const WebtoonViewCountIcon = styled.img`
  vertical-align: top;
  margin-right: 2px;
`

// Pagination style
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.div`
  min-width: 30px;
  height: 30px;
  padding: 4px;
  margin: 0 2px;
  font-weight: 500;
  font-size: 14px;
  //width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border:  ${({ isSelected }) => (isSelected ? '1px solid #ccc' : '')}; 
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
`;

export default function ChannelPosts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const totalCount = channelPostsData.data.channel.chnlPostCnt;
  const size = 12;

  useEffect(() => {
    const calculatePageCount = () => {
      setPageCount(Math.ceil(totalCount / size));
    };

    calculatePageCount();
  }, [totalCount, size]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ChannelTemplate>
      <SectionHeader>
        <span>{channelPostsData.data.channel.chnlPostCnt}개의 포스트</span>
        <SectionHeaderFilter>최신순 | 인기순</SectionHeaderFilter>
      </SectionHeader>
      <WebtoonListContainer style={{ padding: '50px', margin: '20px 0' }}>
        {channelPostsData.data.channelPosts.map((post, index) => (
          <WebtoonListItem key={index}>
            <WebtoonThumbnail imageUrl={post.postThumnPath} />
            <div>
              { post.serTtl != null ? <WebtoonSeriesTitle>{post.serTtl}</WebtoonSeriesTitle> : null}
              <WebtoonTitle>{post.postTtl}</WebtoonTitle>
            </div>
            <WebtoonSubInfo>
              <WebtoonWriter>{channelPostsData.data.channelUser.nic}</WebtoonWriter>
              <WebtoonCount>
                <WebtoonViewCountIcon src="https://d33pksfia2a94m.cloudfront.net/assets/img/icon/ic_eye_black.svg"  width={13} height={16}/>
                {post.postInqrCnt}
              </WebtoonCount>
              <WebtoonCount>
                {/* <WebtoonViewCountIcon src="https://d33pksfia2a94m.cloudfront.net/assets/img/icon/ic_eye_black.svg"  width={13} height={16}/> */}
                ♡
                {post.postLikCnt}
              </WebtoonCount>
              <WebtoonCount>
                21시간 전
              </WebtoonCount>


            </WebtoonSubInfo>
          </WebtoonListItem>
        ))}
      </WebtoonListContainer>
      // 임시로 currentPage를 보여주기 위한 코드  {currentPage} 현재페이지
      {/* <PostListContainer style={{ padding: '50px', margin: '20px 0' }}>
        {channelPostsData.data.channelPosts.map((post, index) => (
          <PostListItem key={index}>
            <div>
              <h3>{post.postTtl}</h3>
              <p>포스트 내용이 들어갈 예정입니다.포스트 내용이 들어갈 예정입니다.포스트 내용이 들어갈 예정입니다.</p>
            </div>
            <Thumbnail imageUrl={post.postThumnPath} />
          </PostListItem>
        ))}
      </PostListContainer> */}

      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </PaginationButton>
        {Array.from({ length: pageCount }).map((_, index) => (
          <PaginationButton
            key={index}
            isSelected={index === currentPage}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton onClick={handleNextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </PaginationButton>
      </PaginationContainer>
    </ChannelTemplate>
  );
}