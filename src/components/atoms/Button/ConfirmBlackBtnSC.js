import styled from 'styled-components';
import { btnStyle } from '../../styled/utils';

const ConfirmBlackBtnSC = styled.button`
  ${btnStyle};

  color: white;
  background-color: ${(p) => p.theme.color.blackA80};
  border: 1px solid ${(p) => p.theme.color.blackA80};
  opacity: ${(p) => (p.disabled ? 0.3 : 1)};
  
  &:hover {
    color: white;
    background-color: ${(p) => p.theme.color.blackA30};
    border-color: ${(p) => p.theme.color.blackA30};
  }
`;

export default ConfirmBlackBtnSC;
