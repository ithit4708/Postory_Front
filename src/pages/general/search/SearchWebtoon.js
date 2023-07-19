import { useSearchParams } from 'react-router-dom';
import SearchTemplate from '../../../components/templates/general/SearchTemplate';
import { useApiGet } from '../../../hooks/useApi';
import HomeSearchBox from '../../../components/molecules/general/HomeSearchBox';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import NoContent from '../../../components/molecules/error/NoContent';
import { countDate } from '../../../components/molecules/user/dateConversion';

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

const WebtoonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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

export default function SearchWebtoon() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const navigate = useNavigate();
  const page = 0;
  const postType = 'webtoon';
  const option = 'all';
  const [totalCount, setTotalCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(page);
  const [url, setUrl] = useState(`/search/${postType}/posts?option=${option}&keyword=${encodeURIComponent(keyword)}&page=${currentPage+1}`);
  const [pageCount, setPageCount] = useState(0);
  const { data, isLoading, error } = useApiGet(
    url,
    [keyword, url]
  );

  const size = 12;

  useEffect(() => {
    if (data) {
      setTotalCount(data.searchCnt || 0);
    }
  }, [data]);

  useEffect(() => {
    const calculatePageCount = () => {
      setPageCount(Math.ceil(totalCount / size));
    };

    calculatePageCount();
  }, [totalCount, size]);

  useEffect(() => {
    setUrl(`/search/${postType}/posts?option=${option}&keyword=${encodeURIComponent(keyword)}&page=${currentPage+1}
`);
  }, [currentPage,keyword]);

  const goPost = (postId) => {
    console.log("postId",postId);
    navigate(`/post/${postId}`);
    //조회수 올라가는 함수 필요
  };


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

  if (isLoading) return<div>Loading...</div>;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  if (!data) {
    return null;
  }


  return (
    <SearchTemplate keyword={keyword}>
      <HomeSearchBox type={"webtoon"}></HomeSearchBox>
      <div>웹툰 {keyword} 검색 결과</div>
      <SectionHeader>
        <span>{data.searchCnt}개의 포스트</span>
        <SectionHeaderFilter>최신순 | 인기순</SectionHeaderFilter>
      </SectionHeader>
      {data.searchCnt !== 0 ?
        (
          <>
            <WebtoonListContainer style={{ padding: '50px', margin: '20px 0' }}>


              {data.posts.map((post, index) => (
                <WebtoonListItem key={index}>
                  <WebtoonThumbnail imageUrl={post.postThumnPath} onClick={() => goPost(post.postId)} />
                  <div>
                    { post.serTtl != null ? <WebtoonSeriesTitle>{post.serTtl}</WebtoonSeriesTitle> : null}
                    <WebtoonTitle>{post.postTtl}</WebtoonTitle>
                  </div>
                  <WebtoonSubInfo>
                    <WebtoonWriter>{post.userNic}</WebtoonWriter>
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
                      {countDate(post.postPblcDtm)}
                    </WebtoonCount>


                  </WebtoonSubInfo>
                </WebtoonListItem>
              ))}


            </WebtoonListContainer>
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
          </>
        )     :
        (
          <>
            <NoContent>
              검색 결과가 없습니다.
            </NoContent>
          </>
        )
      }
    </SearchTemplate>
  );
}