import React from 'react';
import HeadNav from '../components/HeadNav';
import ProfileBox from '../containers/ProfileBox';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const params = useParams();
    const userinfo = JSON.parse(sessionStorage.getItem(`userinfo`));
    const profile = userinfo[params.userinfo];

    return (
        <>
            {profile ? (
                <ProfileLayout>
                    <HeadNav />
                    <ProfileBox />
                </ProfileLayout>
            ) : (
                {/* 404 Not Found 페이지 만들기 */ },
                <p>존재하지 않는 프로필 입니다</p>
            )}

        </>
    );
};

export default ProfilePage;

const ProfileLayout = styled.main`
    padding-top : 58px;
`