import { NavLink } from 'react-router-dom';
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


export default function Home() {
  return (
    <HomeTemplate>
      <HomeSearchSC>
        <StyledLogoSC>
          <img src ={postory}/>
        </StyledLogoSC>
        <HomeSearchBox type={"channel"}></HomeSearchBox>
      </HomeSearchSC>
      {/*<div style={homeStyle}>이거 홈 맞지?*/}
      {/*  <div>*/}
      {/*    <NavLink to={"profile/@hhe1b8"}>*/}
      {/*      <img src="https://d3mcojo3jv0dbr.cloudfront.net/2021/02/24/20/20/d7133b09db1a5fbac0d5cea8433ec8a4.jpeg?w=64&h=64&q=65" />*/}
      {/*      공부하는 여우원숭이 프로필 이동*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*  <NavLink to={"channel/buksan"}>*/}
      {/*    <h1>BUKSAN 채널 바로가기</h1>*/}
      {/*  </NavLink>*/}
      {/*  <NavLink to={"post/create"}>*/}
      {/*    <h1>POST CREATE 바로가기</h1>*/}
      {/*  </NavLink>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </HomeTemplate>
  );
}
