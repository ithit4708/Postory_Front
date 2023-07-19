import HomeTemplate from '../../../components/templates/general/HomeTemplate';
import HomeSearchBox from '../../../components/molecules/general/HomeSearchBox';
import styled from 'styled-components';
import Home from './Home';
import postory from '../../../logo.svg';


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


const HomeSearchSC = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function Webtoon() {
  return (
    <HomeTemplate>
      <HomeSearchSC>
        <StyledLogoSC>
          <img src ={postory}/>
        </StyledLogoSC>
        <HomeSearchBox type={"webtoon"}></HomeSearchBox>
      </HomeSearchSC>
      </HomeTemplate>
  );
}
