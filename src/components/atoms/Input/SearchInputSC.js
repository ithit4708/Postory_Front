import styled from 'styled-components';

const SearchInputSC = styled.input`
  width: 260px;
  height: 40px;
  padding: 0 40px;
  border-radius: 20px;
  border: none;
  outline: none;

  background-color: ${(p) => p.theme.color.gray2};
  font-size: ${(p) => p.theme.fontSize.link};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  color: ${(p) => p.theme.color.link};

  &::placeholder {
    color: ${(p) => p.theme.color.placeholder};
  }
`;

export default SearchInputSC;
