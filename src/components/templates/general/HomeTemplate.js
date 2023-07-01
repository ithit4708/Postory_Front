import { homeLinks } from '../../../appRoute';
import NavMenu from '../../molecules/general/NavMenu';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import Nav from '../../organisms/general/Nav';

export default function HomeTemplate(p) {
  return (
    <>
      <Header />
      <Nav>
        <NavMenu navLinks={homeLinks} />
      </Nav>
      <Main>{p.children}</Main>
    </>
  );
}
