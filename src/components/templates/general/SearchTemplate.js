import NavMenu from '../../molecules/general/NavMenu';
import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';

export default function SearchTemplate(p) {
  const navLinks = [
    {
      to: `/search/channel?keyword=${encodeURIComponent(p.keyword)}`,
      children: '검색 결과',
      isTitle: true,
    },
    {
      to: `/search/channel?keyword=${encodeURIComponent(p.keyword)}`,
      children: '채널',
    },
    {
      to: `/search/webtoon?keyword=${encodeURIComponent(p.keyword)}`,
      children: '웹툰',
      end: true,
    },
    {
      to: `/search/webnovel?keyword=${encodeURIComponent(p.keyword)}`,
      children: '웹소설',
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
