import styled from 'styled-components';

const HomeDiv = styled.div`
border: 1px solid black;
margin: Auto;
height: 500px;
display: flex;
`
const HomeIntro = styled.div`
border: 1px solid blue;
margin: Auto;
`

function App() {
  return (
    <HomeDiv>
      <HomeIntro>
        포스타입 홈페이지
      </HomeIntro>
    </HomeDiv>
  );
}

export default App;
