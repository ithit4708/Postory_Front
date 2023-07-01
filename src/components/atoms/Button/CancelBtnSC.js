import styled from 'styled-components';
import { btnStyle } from '../../styled/utils';

const CancelBtnSC = styled.button`
  ${btnStyle};

  color: black;
  background-color: white;
  border: 1px solid ${(p) => p.theme.color.gray1};

  &:active {
    box-shadow: 0 0 5px ${(p) => p.theme.color.blueBtnShadow};
  }
`;

export default CancelBtnSC;
