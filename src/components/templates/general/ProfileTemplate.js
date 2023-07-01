import NavMenu from '../../molecules/general/NavMenu';
import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';

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
    {
      to: `/profile/${encodeURIComponent(p.nic)}/series`,
      children: '시리즈',
    },
  ];

  return (
    <>
      <Header />
      <Nav>닉네임</Nav>
      <Main>
        <Nav>
          <NavMenu navLinks={mainNavLinks} />
        </Nav>
        {p.children}
      </Main>
    </>
  );
}
