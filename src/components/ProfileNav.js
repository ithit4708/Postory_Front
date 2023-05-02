import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import userData from '../UserData';

const ProfileNav = () => {
    //임시데이터
    const nic = "KSM"; //세션에 저장될 정보

    const getUser = () => {
        return userData;
    }

    //로그인을 성공해서 세션에 저장되어있는 정보와 일치하는 닉네임을 find로 찾아 그 배열요소를 반환
    //배열요소는 객체형태.
    const LoginUserData = getUser().find((user) => user.NIC === nic)

    return (
        <ProfileNavLayout className='profile-Layout'>
            <ProfileNavBox className='profile-nav'>
                <ProfileNavList className='nav-list'>
                    <ProfileNavItem className='nav-item' paddingleft="16px">
                        <NavLink to={"/profile/" + LoginUserData.USER_ID}>채널</NavLink>
                    </ProfileNavItem>
                    <ProfileNavItem className='nav-item'>
                        <NavLink to={"/profile/" + LoginUserData.USER_ID + "/post"}>포스트</NavLink>
                    </ProfileNavItem>
                    <ProfileNavItem className='nav-item'>
                        <NavLink to={"/profile/" + LoginUserData.USER_ID + "/series"}>시리즈</NavLink>
                    </ProfileNavItem>
                </ProfileNavList>
            </ProfileNavBox>
        </ProfileNavLayout>
    );
};

export default ProfileNav;

const ProfileNavLayout = styled.div`
    @media screen and (min-width: 992px)
    {
        margin: 0 0 -56px 0;
    }    

    @media screen and (min-width: 768px)
    {
        margin: 0 -26px -56px -26px;
        height: 56px;
    }
    position: relative;
    z-index: 10;
    display: flex;
    flex: 1;
    border-bottom: 1px solid rgba(0,0,0,.1);
    background-color: #fff;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
`

const ProfileNavBox = styled.nav`
    @media screen and (min-width: 768px)
    {
        height: 56px;
    }
    flex: 1;
    height: 48px;
    overflow: hidden;
`

const ProfileNavList = styled.ul`
    @media screen and (min-width: 768px)
    {
        height: 56px;
    }
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    list-style: none;
    flex-wrap: wrap;
    li:first-child {
        @media screen and (min-width: 992px)
        {
            padding-left: 0;
        }
        @media screen and (min-width:768px)
        {
            padding-left: 16px;    
        }
        padding-left: 10px;
    }
`

const ProfileNavItem = styled.li`
    @media screen and (min-width:768px)
    {
        margin-left: 0;    
    }
    position: relative;
    display: inline-block;
    flex-shrink: 0;

    a{
        @media screen and (min-width: 768px)
        {
            padding: 10px 14px 10px;
            line-height: 32px;
        }
        @media screen and (min-width: 992px)
        {
            padding: 10px 20px 10px 10px;
        }
        padding: 10px 14px 10px;
        line-height: 22px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        height: 100%;
        line-height: 32px;
        position: relative;
        font-weight: 600;
        color: currentColor;
        text-decoration: none;
        outline: none;
        opacity: .5;
        &:hover{
            opacity : .9;
            transition: opacity .15s ease-in-out;
        }
    }
`