import styled from 'styled-components';
import { headerLinks } from '../../../appRoute';
import NaviLinkSC from '../../atoms/Link/NaviLinkSC';
import { useLocation } from 'react-router-dom';

const HeaderNavMenuSC = styled.ul`
  height: ${(p) => p.theme.globalPx.gHeaderHeight}px;
  display: flex;
`;

const HeaderNaviLinkSC = styled(NaviLinkSC)`
  line-height: ${(p) => p.theme.globalPx.gHeaderHeight}px;

  &.active::after {
    width: 0;
  }
`;

export default function HeaderNavMenu() {
  const location = useLocation();

  function getClassName() {
    //<HomeNav/>에 NavLink를 추가하면 해당 path를 아래에 넣어야 HeaderTop의 MainNav의홈 actvie 상태가 제대로 작동한다.
    const activePaths = ['/webtoon', '/webnovel'];
    if (activePaths.includes(location.pathname)) {
      return 'active';
    }
  }

  return (
    <HeaderNavMenuSC>
      {headerLinks.map((link) => (
        <li key={link.children}>
          <HeaderNaviLinkSC
            to={link.to}
            end={link.end}
            children={link.children}
            className={link.to === '/' && getClassName()}
          />
        </li>
      ))}
    </HeaderNavMenuSC>
  );
}
