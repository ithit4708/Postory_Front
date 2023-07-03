import { useState } from 'react';
import { useApiPost } from '../../../hooks/useApi';
import ScrapBtn from '../../atoms/User/ScrapBtn';
import UnScrapBtn from '../../atoms/User/UnScrapBtn';

export default function ScrapPostBtn({ isScrapped: isScrap }) {
  const [isScrapped, setIsScrapped] = useState(false);
  useApiPost();
  useApiPost();

  const handleScrap = () => {
    console.log('스크랩 실행');

    setIsScrapped(true);
  };

  const handleUnscrap = () => {
    console.log('언스크랩 실행');
    setIsScrapped(false);
  };

  return (
    <div>
      {isScrapped ? (
        <UnScrapBtn onClick={handleUnscrap} />
      ) : (
        <ScrapBtn onClick={handleScrap} />
      )}
    </div>
  );
}
