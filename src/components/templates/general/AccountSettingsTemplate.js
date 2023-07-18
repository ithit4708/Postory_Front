import NavMenu from '../../molecules/general/NavMenu';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import Nav from '../../organisms/general/Nav';
import { accSetLinks } from '../../../appRoute';

export default function AccountSettingsTemplate(p) {
  return (
    <>
      <Header />
      <Nav>
        <NavMenu navLinks={accSetLinks} />
      </Nav>
      <Main narrow={true}>{p.children}</Main>
    </>
  );
}
