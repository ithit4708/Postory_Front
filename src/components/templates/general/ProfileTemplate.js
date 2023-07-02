import NavMenu from '../../molecules/general/NavMenu';
import { NavSC } from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import { contentBox } from '../../styled/utilsProps';
import styled from 'styled-components';
import ProfileSubHeader from '../../organisms/general/ProfileSubHeader';
import UserProfile from '../../organisms/general/UserProfile';

const MainNavSC = styled(NavSC)`
  top: ${(p) => p.theme.globalPx.gHeaderHeight + p.theme.globalPx.gNavHeight}px;
  z-index: 10;
  justify-content: flex-start;

  .contentBox {
    ${contentBox}
    position: relative;
  }
`;

export default function ProfileTemplate(p) {
  const mainNavLinks = [
    {
      to: `/profile/${encodeURIComponent(p.nic)}`,
      children: '채널',
      end: true,
    },
    {
      to: `/profile/${encodeURIComponent(p.nic)}/post`,
      children: '포스트',
    },
    // {
    //   to: `/profile/${encodeURIComponent(p.nic)}/series`,
    //   children: '시리즈',
    // },
  ];

  return (
    <>
      <Header />
      <ProfileSubHeader children={p.nic} />
      <Main>
        <UserProfile {...p.data.user} />
        {/* 채널이 없을 때는 MainNavSC가 필요 없다. */}
        <MainNavSC>
          <NavMenu isStart={true} navLinks={mainNavLinks} />
        </MainNavSC>
        {p.children}
      </Main>
    </>
  );
}
