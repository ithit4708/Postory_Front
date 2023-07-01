import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { btnStyle } from '../../styled/utils';

const BtnLinkSC = styled(Link)`
  ${btnStyle};

  color: black;
  background-color: white;
  border: 1px solid ${(p) => p.theme.color.gray1};

  &:hover {
    color: ${(p) => p.theme.color.blue1};
    border-color: ${(p) => p.theme.color.blue1};
  }

  &:active {
    box-shadow: 0 0 5px ${(p) => p.theme.color.blueBtnShadow};
  }
`;

export default BtnLinkSC;
