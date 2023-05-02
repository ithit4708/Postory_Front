import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userData from '../UserData';

const ProfileContent = () => {
    //임시데이터
    const nic = "KSM"; //세션에 저장될 정보

    const getUser = () => {
        return userData;
    }
    //로그인을 성공해서 세션에 저장되어있는 정보와 일치하는 닉네임을 find로 찾아 그 배열요소를 반환
    //배열요소는 객체형태.
    const LoginUserData = getUser().find((user) => user.NIC === nic)

    return (
        <ContentLayout>
            <UserImgBox><UserImg /></UserImgBox>
            <NicknameHead4>{LoginUserData.NIC}</NicknameHead4>
            <SelfIntroBox>{LoginUserData.USER_INTRO}</SelfIntroBox>
            <ProfileEditBox><Link to="#">프로필 수정</Link></ProfileEditBox>
        </ContentLayout>
    );
};

export default ProfileContent;

const ContentLayout = styled.div`
    padding: 48px 100px 48px 100px;
    position: relative;
    text-align: center!important;
`

const UserImgBox = styled.div`
    margin-bottom: 20px;
    width: 96px;
    height: 96px;
    position: relative;
    background-color: #fff;
    display: inline-flex!important;
`

const UserImg = styled.img`
    width: inherit;
    height: inherit;
    vertical-align: top;
    text-align: center;
`

const NicknameHead4 = styled.h4`
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 18px;
    white-space: initial;
    line-height: 21px;
    margin-top: 0;
`

const SelfIntroBox = styled.div`
    font-size: 14px;
    line-height: 18px;
    color: #909090;
    word-break: break-word;
    font-weight: 400;
`

const ProfileEditBox = styled.div`
    margin-top: 1rem!important;
    a {
        color: #000;
        background-color: #fff;
        border-color: #ccc;
        border: 1px solid;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 7px 15px;
        font-size: 15px;
        border-radius: 4px;
        line-height: 1.5rem;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        text-decoration: none;
        outline: none;
        &:hover {
            color: #007bff;
            transition: color .15s ease-in-out        
        }
    }
`