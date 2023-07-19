import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';

export default function ViewTemplate(p) {
  return (
    <>
      <Header />
      <Nav>{p.nic}</Nav>
      <Main>{p.children}</Main>
    </>
  );
}
