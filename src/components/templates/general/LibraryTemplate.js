import NavMenu from '../../molecules/general/NavMenu';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import Nav from '../../organisms/general/Nav';
import { libraryLinks } from '../../../appRoute';

export default function LibraryTemplate(p) {
  return (
    <>
      <Header />
      <Nav>
        <NavMenu navLinks={libraryLinks} />
      </Nav>
      <Main narrow={true}>{p.children}</Main>
    </>
  );
}
