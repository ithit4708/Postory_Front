import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HeadNavLayout, HeadNavBox, HeadNavList, HeadNavItem } from '../components/SettingHeadNav';

const PointBenefitHeadNav = () => {
    const { type } = useParams();

    return (
        <>
            <PtBtLayout className='second-header'>
                <h1><Link to="/point">포인트/수익</Link></h1>
                <PtBtBox>
                    <PtBtList>
                        <PtBtItem active={type === undefined}>
                            <Link to="/point">내 포인트</Link>
                        </PtBtItem>
                        <PtBtItem active={type === 'earnings'}>
                            <Link to="/point/earnings">내 수익</Link>
                        </PtBtItem>
                    </PtBtList>
                </PtBtBox>
            </PtBtLayout>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default PointBenefitHeadNav;
const PtBtLayout = styled(HeadNavLayout)`
    
`;
const PtBtBox = styled(HeadNavBox)`
    h1 {
        left : 0;
    }
`;

const PtBtList = styled(HeadNavList)`

`;

const PtBtItem = styled(HeadNavItem)`

`;