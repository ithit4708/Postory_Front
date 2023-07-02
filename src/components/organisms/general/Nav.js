import styled from 'styled-components';
import { contentBox, stickyBox } from '../../styled/utilsProps';

export const NavSC = styled.nav`
  ${stickyBox}
  top: ${(p) => p.theme.globalPx.gHeaderHeight}px;
  z-index: 20;
  height: ${(p) => p.theme.globalPx.gNavHeight}px;

  .contentBox {
    ${contentBox}
    position: relative;
  }
`;

export default function Nav(p) {
  return (
    <NavSC>
      <div className="contentBox">{p.children}</div>
    </NavSC>
  );
}
