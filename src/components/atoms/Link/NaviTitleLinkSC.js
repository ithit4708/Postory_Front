import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linkChar } from '../../styled/utilsProps';

const NaviTitleLinkSC = styled(Link)`
  position: absolute;
  left: 0;
  display: block;
  line-height: ${(p) => p.theme.globalPx.gNavHeight}px;

  ${linkChar}
  color:black;
`;

export default NaviTitleLinkSC;
