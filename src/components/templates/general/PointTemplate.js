import NavMenu from '../../molecules/general/NavMenu';
import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import { pointLinks } from '../../../appRoute';

//구현보류로 미사용
export default function PointTemplate(p) {
  return (
    <>
      <Header />
      <Nav>
        <NavMenu navLinks={pointLinks} />
      </Nav>
      <Main>{p.children}</Main>
    </>
  );
}
