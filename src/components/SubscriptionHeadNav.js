import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HeadNavLayout, HeadNavBox, HeadNavList, HeadNavItem } from './SettingHeadNav';

const SubscriptionHeadNav = () => {
    const { type } = useParams();

    return (
        <>
            <SubLayout className='second-header'>
                <h1><Link to="/subscriptions">구독</Link></h1>
                <SubBox>
                    <SubList>
                        <SubItem active={type === undefined}>
                            <Link to="/subscriptions">포스트</Link>
                        </SubItem>
                        <SubItem active={type === 'channel'}>
                            <Link to="/subscriptions/channel">채널</Link>
                        </SubItem>
                    </SubList>
                </SubBox>
            </SubLayout>
            <PageMain>
                <Outlet />
            </PageMain>
        </>
    );
};

export default SubscriptionHeadNav;
const SubLayout = styled(HeadNavLayout)`
    z-index: 9999;
`;
const SubBox = styled(HeadNavBox)`
    h1 {
        left : 0;
    }
`;

const SubList = styled(HeadNavList)`

`;

const SubItem = styled(HeadNavItem)`

`;

const PageMain = styled.main`
    padding-top: 50px;
    position: relative;
    hr {
        margin-bottom: 56px;
        border-top: 1px solid rgba(0,0,0,.125);
    }
    a {
        text-decoration: none;
        outline: none;
        color : currentColor
    }
`;