import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { linkChar } from '../../styled/utilsProps';
import { naviLinkActive } from '../../styled/utils';

const NaviLinkSC = styled(NavLink)`
  position: relative;
  display: block;
  padding: 0 16px;
  line-height: ${(p) => p.theme.globalPx.gNavHeight}px;

  ${linkChar};
  ${naviLinkActive};
`;

export default NaviLinkSC;
