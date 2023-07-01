import styled from 'styled-components';
import { btnStyle } from '../../styled/utils';

const AlertBtnSC = styled.button`
  ${btnStyle};

  color: ${(p) => p.theme.color.blue1};
  background-color: white;
  border: 1px solid ${(p) => p.theme.color.blue1};
  box-shadow: 0 0 5px ${(p) => p.theme.color.blueBtnShadow};
`;

export default AlertBtnSC;
