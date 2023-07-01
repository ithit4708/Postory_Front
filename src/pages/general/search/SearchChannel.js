import { useSearchParams } from 'react-router-dom';
import SearchTemplate from '../../../components/templates/general/SearchTemplate';

export default function SearchChannel() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  return (
    <SearchTemplate keyword={keyword}>
      <div>채널 {keyword} 검색 결과</div>
    </SearchTemplate>
  );
}
