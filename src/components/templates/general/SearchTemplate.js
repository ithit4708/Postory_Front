import NavMenu from '../../molecules/general/NavMenu';
import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';

export default function SearchTemplate(p) {
  const navLinks = [
    {
      to: `/search?keyword=${encodeURIComponent(p.keyword)}`,
      children: '검색 결과',
      isTitle: true,
    },
    {
      to: `/search?keyword=${encodeURIComponent(p.keyword)}`,
      children: '포스트',
      end: true,
    },
    {
      to: `/search/series?keyword=${encodeURIComponent(p.keyword)}`,
      children: '시리즈',
    },
    {
      to: `/search/channel?keyword=${encodeURIComponent(p.keyword)}`,
      children: '채널',
    },
  ];

  return (
    <>
      <Header />
      <Nav>
        <NavMenu navLinks={navLinks} />
      </Nav>
      <Main>{p.children}</Main>
    </>
  );
}
