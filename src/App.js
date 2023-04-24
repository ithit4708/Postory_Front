import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

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
    <>
      <Routes>
        <Route path='/' element={
          <HomeDiv>
            <HomeIntro>
              포스타입 홈페이지
            </HomeIntro>
          </HomeDiv>
        } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
