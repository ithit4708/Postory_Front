import styled from 'styled-components';
import NaviLinkSC from '../../atoms/Link/NaviLinkSC';
import NaviTitleLinkSC from '../../atoms/Link/NaviTitleLinkSC';

export const NavMenuSC = styled.ul`
  height: ${(p) => p.theme.globalPx.gNavHeight}px;
  width: 100%;

  display: flex;
  justify-content: ${(p) => (p.isStart ? 'flex-start' : 'center')};
`;

export default function NavMenu({ isStart = false, navLinks }) {
  return (
    <NavMenuSC isStart={isStart}>
      {navLinks.map((link, idx) => (
        <li key={idx}>
          {link.isTitle ? (
            <NaviTitleLinkSC
              to={link.to}
              end={link.end}
              children={link.children}
            />
          ) : (
            <NaviLinkSC to={link.to} end={link.end} children={link.children} />
          )}
        </li>
      ))}
    </NavMenuSC>
  );
}
