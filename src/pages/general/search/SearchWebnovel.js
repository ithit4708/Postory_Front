import { useSearchParams } from 'react-router-dom';
import SearchTemplate from '../../../components/templates/general/SearchTemplate';
import { useApiGet } from '../../../hooks/useApi';
import HomeSearchBox from '../../../components/molecules/general/HomeSearchBox';
import PostItem from '../../../components/organisms/general/PostItem';
import NoContent from '../../../components/molecules/error/NoContent';
import BtnLinkSC from '../../../components/atoms/Link/BtnLinkSC';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

export default function SearchWebnovel() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const navigate = useNavigate();
  const page = 0;
  const postType = 'webnovel';
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
      <HomeSearchBox type={"webnovel"}></HomeSearchBox>
      <div>웹소설 {keyword} 검색 결과</div>

      <SectionHeader>
        <span>{data.searchCnt}개의 포스트</span>
        <SectionHeaderFilter>최신순 | 인기순</SectionHeaderFilter>
      </SectionHeader>
      {data.searchCnt !== 0 ? (
        <>
        {data.posts.map((post) => <PostItem key={post.postId} post={post}/>)}
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
          ) : (
        <>
          <NoContent>
            검색 결과가 없습니다.
          </NoContent>
        </>
      )}
    </SearchTemplate>
  );
}