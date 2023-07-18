import { useState } from 'react';
import SubsBtn from '../../atoms/Channel/SubsBtn';
import UnsubsBtn from '../../atoms/Channel/UnsubsBtn';
import { useApiPost, useApiDelete } from '../../../hooks/useApi';
import useModal from '../modal/useModal';
import ConfirmBox from '../modal/ConfirmBox';
import { useEffect } from 'react';
import useSubChannelList from '../../../stores/useSubChannelList';

export default function SubscribeBtn({ isSubsed, chnlId }) {
  const [isSubscribed, setIsSubscribed] = useState(isSubsed);
  const { isOpen, openModal, closeModal } = useModal();
  const {
    res: subsRes,
    error: subsErr,
    setError: setSubsErr,
    postData: subscribe,
  } = useApiPost(`/subscriptions`, { chnlId: chnlId });
  const {
    res: unsubsRes,
    error: unsubsErr,
    setError: setUnsubsErr,
    deleteData: unsubscribe,
  } = useApiDelete(`/subscriptions/cancle?chnlId=${chnlId}`);
  const { removeChannel } = useSubChannelList();
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (subsRes) {
      setIsSubscribed(true);
    }
  }, [subsRes]);

  useEffect(() => {
    if (unsubsRes) {
      if (!currentPath.includes('/profile')) {
        removeChannel(chnlId);
      }
      setIsSubscribed(false);
    }
  }, [unsubsRes, currentPath]);

  const handleSubscribe = () => {
    console.log('구독 실행');

    subscribe({
      chnlId: chnlId,
    });
  };

  const handleUnsubscribe = () => {
    openModal();
  };

  // 'Confirm' 버튼이 클릭되었을 때 호출될 콜백 함수
  const handleConfirm = () => {
    console.log('구독 취소 실행');
    closeModal();
    unsubscribe();
  };

  // 'Cancel' 버튼이 클릭되었을 때 호출될 콜백 함수
  const handleCancel = () => {
    console.log('구독 취소 취소');
    closeModal();
  };

  return (
    <div>
      {isSubscribed ? (
        <>
          <UnsubsBtn onClick={handleUnsubscribe}>구독 중</UnsubsBtn>
          {isOpen && (
            <ConfirmBox
              title="확인"
              message="정말 구독을 취소하시겠습니까?"
              confirmName="구독 취소"
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
        </>
      ) : (
        <SubsBtn onClick={handleSubscribe}>+ 구독</SubsBtn>
      )}
    </div>
  );
}
