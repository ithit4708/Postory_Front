import styled from 'styled-components';
import { btnStyle } from '../../styled/utils';

const ConfirmBtnSC = styled.button`
  ${btnStyle};

  color: white;
  background-color: ${(p) => p.theme.color.blue2};
  border: 1px solid ${(p) => p.theme.color.blue2};
  opacity: ${(p) => (p.disabled ? 0.3 : 1)};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    color: white;
    background-color: ${(p) => p.theme.color.blue1};
    border-color: ${(p) => p.theme.color.blue1};
  }
`;

export default ConfirmBtnSC;
