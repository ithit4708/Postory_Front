import styled from 'styled-components';
import { btnStyle } from '../../styled/utils';
import { Link } from 'react-router-dom';

const BlueBtnLinkSC = styled(Link)`
  ${btnStyle};

  color: white;
  background-color: ${(p) => p.theme.color.blue2};
  border: 1px solid ${(p) => p.theme.color.blue2};

  &:hover {
    color: white;
    background-color: ${(p) => p.theme.color.blue1};
    border-color: ${(p) => p.theme.color.blue1};
  }
`;

export default BlueBtnLinkSC;
