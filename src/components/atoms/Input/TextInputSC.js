import styled from 'styled-components';

const TextInputSC = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border-radius: 4px;
  height: 40px;
  border: 1px solid ${(p) => p.theme.color.gray1};
  width: 100%;
  outline: none;
  color: ${(p) => p.theme.color.blackA80};
  font-weight: ${(p) => p.theme.fontWeight.medium};

  &:focus {
    border-color: ${(p) => p.theme.color.blue2};
  }
`;

export default TextInputSC;
