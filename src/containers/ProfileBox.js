import React from 'react';
import styled from 'styled-components';
import ProfileNav from '../components/ProfileNav';
import ProfileContent from '../components/ProfileContent';
import CreationListBox from './CreationListBox';

const ProfileInfo = () => {
    return (
        <ProfileLayout>
            <ProfileContent />
            <ProfileNav />
            <CreationListBox />
        </ProfileLayout>
    );
};

export default ProfileInfo;

const ProfileLayout = styled.div`
    padding-right: 26px;
    padding-left: 26px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1052px;
`