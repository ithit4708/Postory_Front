import NavMenu from '../../molecules/general/NavMenu';
import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import { subsLinks } from '../../../appRoute';

export default function SubscriptionsTemplate(p) {
  return (
    <>
      <Header />
      <Nav>
        <NavMenu navLinks={subsLinks} />
      </Nav>
      <Main narrow={true}>{p.children}</Main>
    </>
  );
}
