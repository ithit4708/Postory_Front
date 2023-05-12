import styled from 'styled-components';
import React, { useState } from 'react';
import PointBenefitSideBar from '../components/PointBenefitSideBar';
import PointBenefitContent from '../components/PointBenefitContent';
import { SettingBoxLayout } from '../components/SettingAccount';
import { useParams } from 'react-router-dom';

const PointBenefitPage = () => {
    const { type } = useParams();

    return (
        <PointBenefitLayout className='container'>
            <PointBenefitRow>
                <PointBenefitSideBar type={type} />
                <PointBenefitContent type={type} />
            </PointBenefitRow>
        </PointBenefitLayout>
    );
};

export default PointBenefitPage;

const PointBenefitLayout = styled(SettingBoxLayout)`
    max-width: 1052px;
    position: relative;
    top: 56px;
`;

const PointBenefitRow = styled.div`
    display:flex;
`;