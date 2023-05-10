import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import LoginSignupPage from './pages/LoginSignupPage';
import GlobalStyle from './GlobalStyle';
import ProfilePage from './pages/ProfilePage';
import AccountSettingsPages from './pages/AccountSettingsPages';
import SettingHeadNav from './components/SettingHeadNav';

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
      <GlobalStyle />
      <Routes>
        <Route path='/' element={
          <HomeDiv>
            <HomeIntro>
              포스타입 홈페이지
            </HomeIntro>
          </HomeDiv>
        } />
        <Route path='/login' element={<LoginSignupPage />} />
        <Route path='/signup' element={<LoginSignupPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profile/:userinfo' element={<ProfilePage />} />
        <Route path='/profile/:userinfo/:creation' element={<ProfilePage />} />
        <Route element={<SettingHeadNav />}>
          <Route path='/account/settings' element={<AccountSettingsPages />} />
          <Route path='/account/settings/:type' element={<AccountSettingsPages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
