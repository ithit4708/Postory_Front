import styled from 'styled-components';
import { contentBox, stickyBox } from '../../styled/utilsProps';
import PostoryLogo from '../../atoms/Logos/PostoryLogo';
import HeaderUser from '../../molecules/general/HeaderUser/HeaderUser';
import SearchBox from '../../molecules/general/SearchBox';
import HeaderNavMenu from '../../molecules/general/HeaderNavMenu';

export const HeaderSC = styled.header`
  ${stickyBox}
  z-index:30;

  div.container {
    ${contentBox}
    height: ${(p) => p.theme.globalPx.gHeaderHeight}px;
    justify-content: space-between;
    gap: 10px;
  }
`;

export default function Header() {
  return (
    <HeaderSC>
      <div className="container">
        <PostoryLogo />
        <HeaderNavMenu />
        <SearchBox />
        <HeaderUser />
      </div>
    </HeaderSC>
  );
}
