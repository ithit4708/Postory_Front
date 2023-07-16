import styled from 'styled-components';
import { TfiSearch } from 'react-icons/tfi';
import { BsFillXCircleFill } from 'react-icons/bs';
import WrapBtnSC from '../../atoms/Button/WrapBtnSC';
import SearchInput from '../../atoms/Input/SearchInputSC';
import { useSearchBox } from './useSearchBox';

const SearchBoxSC = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchInnerSC = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    color: ${(p) => p.theme.color.link};
  }

  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    color: ${(p) => p.theme.color.link};
  }
`;

export default function SearchBox() {
  const { value, onChange, onKeyDown, onClick } = useSearchBox('/search/webtoon');

  return (
    <SearchBoxSC>
      <SearchInnerSC>
        <TfiSearch size={14} className="icon" />
        <SearchInput
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
        />
        {value.length > 0 && (
          <WrapBtnSC className="btn" onClick={onClick}>
            <BsFillXCircleFill size={14} />
          </WrapBtnSC>
        )}
      </SearchInnerSC>
    </SearchBoxSC>
  );
}
