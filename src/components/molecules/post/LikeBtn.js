import { useState } from 'react';
import { useApiPost, useApiDelete } from '../../../hooks/useApi';
import useModal from '../modal/useModal';
import ConfirmBox from '../modal/ConfirmBox';
import { useEffect } from 'react';
import useChannelList from '../../../stores/useChannelList';
import { AiOutlineHeart } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UnHeartBtn from './UnHeartBtn';
import HeartBtn from './HeartBtn';

export default function LikeBtn({ liked, postId }) {
  const [isLiked, setIsLiked] = useState(liked);
  const { isOpen, openModal, closeModal } = useModal();
  const {
    res: likeRes,
    error: likeErr,
    setError: setLikeErr,
    postData: like,
  } = useApiPost(`/library/like`, { postId: postId });
  const {
    res: unlikeRes,
    error: unlikeErr,
    setError: setUnlikeErr,
    deleteData: unlike,
  } = useApiDelete(`/library/like?postId=${postId}`);
  const { removeChannel } = useChannelList();
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (likeRes) {
      setIsLiked(true);
    }
  }, [likeRes]);

  useEffect(() => {
    if (unlikeRes) {
      if (!currentPath.includes('/profile')) {
        removeChannel(postId);
      }
      setIsLiked(false);
    }
  }, [unlikeRes, currentPath]);

  const handleLike = () => {
    console.log('구독 실행');

    like({
      postId: postId,
    });
  };

  const handleUnlike = () => {
    openModal();
  };

  // 'Confirm' 버튼이 클릭되었을 때 호출될 콜백 함수
  const handleConfirm = () => {
    console.log('좋아요 취소 실행');
    closeModal();
    unlike();
  };

  // 'Cancel' 버튼이 클릭되었을 때 호출될 콜백 함수
  const handleCancel = () => {
    console.log('좋아요 취소 취소');
    closeModal();
  };

  return (
    <div>
      {isLiked ? (
        <>
          <UnHeartBtn onClick={handleUnlike}>
          </UnHeartBtn>
          {isOpen && (
            <ConfirmBox
              title="확인"
              message="정말 좋아요를 취소하시겠습니까??"
              confirmName="좋아요 취소"
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
        </>
      ) : (
        <HeartBtn onClick={handleLike}>
        </HeartBtn>
      )}
    </div>
  );
}
