import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import LoginSignupPage from './pages/LoginSignupPage';
import ProfilePage from './pages/ProfilePage';
import AccountSettingsPages from './pages/AccountSettingsPages';
import SettingHeadNav from './components/SettingHeadNav';
import PointBenefitHeadNav from './components/PointBenefitHeadNav';
import PointBenefitPage from './pages/PointBenefitPage';
import SubscriptionHeadNav from './components/SubscriptionHeadNav';
import SubscriptionPage from './pages/SubscriptionPage';
import StorePage from "./pages/product/StorePage";
import ProductPostPage from "./pages/product/ProductPostPage";
import SettlementPage from "./pages/product/SettlementPage";
import OrderPage from "./pages/product/OrderPage";
import SetlReadyPage from "./pages/product/SetlReadyPage";
import OrderListPage from "./pages/order/OrderListPage";
import OrderDetailPage from "./pages/order/OrderDetailPage";

const HomeDiv = styled.div`
  border: 1px solid black;
  margin: Auto;
  height: 500px;
  display: flex;
`;
const HomeIntro = styled.div`
  border: 1px solid blue;
  margin: Auto;
`;

function App() {
    return (
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
                <Route element={<PointBenefitHeadNav />}>
                    <Route path='/point' element={<PointBenefitPage />} />
                    <Route path='/point/:type' element={<PointBenefitPage />} />
                </Route>
                <Route element={<SubscriptionHeadNav />}>
                    <Route path='/subscriptions' element={<SubscriptionPage />} />
                    <Route path='/subscriptions/:type' element={<SubscriptionPage />} />
                </Route>
                <Route path="/store" element={<StorePage />} />
                <Route path="/store/product/:prodId" element={<ProductPostPage />}/>
                <Route path="/order/pay" element={<SettlementPage />} />
                <Route path="/store/product/order" element={<OrderPage />} />
                <Route path="/order/pay/ready" element={<SetlReadyPage />} />
                <Route path="/order/list" element={<OrderListPage />} />
                <Route path="/order/detail/:ordId" element={<OrderDetailPage />} />
            </Routes>
    );

}

export default App;
