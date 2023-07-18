import { useState } from 'react';
import { useApiPost, useApiDelete } from '../../../hooks/useApi';
import ScrapBtn from '../../atoms/User/ScrapBtn';
import UnScrapBtn from '../../atoms/User/UnScrapBtn';
import { useEffect } from 'react';
import useModal from '../modal/useModal';
import AlertBox from '../modal/AlertBox';
import useScrapList from '../../../stores/useScrapList';

export default function ScrapPostBtn({ isScraped, postId }) {
  const [isScrapped, setIsScrapped] = useState(isScraped);
  const { isOpen, openModal, closeModal } = useModal();
  const {
    res: scrapRes,
    error: scrapErr,
    setError: setScrapErr,
    postData: scrap,
  } = useApiPost(`/library/scrap`, { postId: postId });
  const {
    res: unscrapRes,
    error: unscrapErr,
    setError: setUnscrapErr,
    deleteData: unscrap,
  } = useApiDelete(`/library/scrap/cancle?postId=${postId}`);
  const currentPath = window.location.pathname;
  const { removePost } = useScrapList();

  useEffect(() => {
    if (scrapRes) {
      setIsScrapped(true);
    }
  }, [scrapRes]);

  useEffect(() => {
    if (unscrapRes) {
      setIsScrapped(false);
    }
  }, [unscrapRes, currentPath]);

  const handleScrap = () => {
    console.log('스크랩 실행');
    scrap({
      postId: postId,
    });
  };

  const handleUnscrap = () => {
    console.log('언스크랩 실행');
    openModal();
    unscrap();
  };

  // 버튼이 클릭되었을 때 호출될 콜백 함수
  const handleClose = () => {
    if (currentPath.includes('/library/scrap')) {
      removePost(postId);
    }
    closeModal();
  };

  return (
    <div>
      {isOpen && (
        <AlertBox
          title="알림"
          message="스크랩에서 제외했습니다."
          btnName="확인"
          close={handleClose}
        />
      )}
      {isScrapped ? (
        <UnScrapBtn onClick={handleUnscrap} />
      ) : (
        <ScrapBtn onClick={handleScrap} />
      )}
    </div>
  );
}
