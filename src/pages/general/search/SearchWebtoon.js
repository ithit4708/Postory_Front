import { useSearchParams } from 'react-router-dom';
import SearchTemplate from '../../../components/templates/general/SearchTemplate';

export default function SearchPost() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  return (
    <SearchTemplate keyword={keyword}>
      <div>포스트 {keyword} 검색 결과</div>
    </SearchTemplate>
  );
}
