import HomeTemplate from '../../../components/templates/general/HomeTemplate';
import HomeSearchBox from '../../../components/molecules/general/HomeSearchBox';
import styled from 'styled-components';
import postory from '../../../logo.svg';

const HomeSearchSC = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledLogoSC = styled.div`
  position: relative;

  cursor: ${(p) => (p.disable ? 'not-allowed' : 'pointer')};
  height: 50px;
  width: 108px;
  /* border: 1px solid black; */

  a {
    cursor: inherit;
  }

  img {
    position: relative;
    width: 100%;
    user-select: none;
  }
`;


export default function Webnovel() {
  return (
    <HomeTemplate>
      <HomeSearchSC>
        <StyledLogoSC>
          <img src ={postory}/>
        </StyledLogoSC>
        <HomeSearchBox type={"webnovel"}></HomeSearchBox>
      </HomeSearchSC>
    </HomeTemplate>
  );
}
