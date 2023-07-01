import styled from 'styled-components';
import postory from '../../../logo.svg';
import { Link } from 'react-router-dom';

const StyledLogoSC = styled.div`
  position: relative;

  cursor: ${(p) => (p.disable ? 'not-allowed' : 'pointer')};
  height: 28px;
  width: 108px;
  /* border: 1px solid black; */

  a {
    cursor: inherit;
  }

  img {
    position: absolute;
    top: 14%;
    width: 100%;
    user-select: none;
  }
`;

export default function PostoryLogo({ disable = false }) {
  return (
    <StyledLogoSC disable={disable}>
      <Link to={disable ? '#' : '/'}>
        <img src={postory} alt="포스토리" />
      </Link>
    </StyledLogoSC>
  );
}
