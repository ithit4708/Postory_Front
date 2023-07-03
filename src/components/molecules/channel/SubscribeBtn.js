import { useState } from 'react';
import SubsBtn from '../../atoms/Channel/SubsBtn';
import UnsubsBtn from '../../atoms/Channel/UnsubsBtn';
import { useApiPost } from '../../../hooks/useApi';

export default function SubscribeBtn({ isSubsed }) {
  const [isSubscribed, setIsSubscribed] = useState(isSubsed);
  useApiPost();
  useApiPost();

  const handleSubscribe = () => {
    console.log('구독 실행');

    setIsSubscribed(true);
  };

  const handleUnsubscribe = () => {
    console.log('구독 취소 실행');
    setIsSubscribed(false);
  };

  return (
    <div>
      {isSubscribed ? (
        <UnsubsBtn onClick={handleUnsubscribe}>구독 중</UnsubsBtn>
      ) : (
        <SubsBtn onClick={handleSubscribe}>+ 구독</SubsBtn>
      )}
    </div>
  );
}
