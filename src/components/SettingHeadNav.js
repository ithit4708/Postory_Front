import React from 'react';
import styled, { css } from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SettingHeadNav = () => {
    const { type } = useParams();

    return (
        <>
            <HeadNavLayout className='second-header'>
                <h1><Link to="/account/settings">설정</Link></h1>
                <HeadNavBox>
                    <HeadNavList>
                        <HeadNavItem active={type === undefined}>
                            <Link to="/account/settings">계정</Link>
                        </HeadNavItem>
                        <HeadNavItem active={type === 'profile'}>
                            <Link to="/account/settings/profile">프로필</Link>
                        </HeadNavItem>
                        <HeadNavItem active={type === 'notification'}>
                            <Link to="/account/settings/notification">알림</Link>
                        </HeadNavItem>
                        <HeadNavItem active={type === 'block'}>
                            <Link to="/account/settings/block">차단</Link>
                        </HeadNavItem>
                    </HeadNavList>
                </HeadNavBox>
            </HeadNavLayout>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default SettingHeadNav;

const HeadNavLayout = styled.nav`
    top : 56px ;
    box-shadow: inset 0 1px 0 0 rgba(0,0,0,.05);
    display: flex;
    position: relative;
    padding: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    
    a{
        color: currentColor;
        text-decoration: none;
        outline: none;
        z-index: 2;
    }
    h1{
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        right: 100px;
        left: 50px;
        height: 100%;
        padding: 8px 0;
        margin: 0;
        line-height: 100%;
        font-weight: 600;
        font-size: 18px;
        @media screen and (min-width: 768px) 
        {
            right: 220px;
            left: 220px;
            font-size: 20px;                
        }
        @media screen and (min-width: 992) 
        {
            position: absolute;
            top: 60px;
            left: 26px;
            z-index: 1;
            height: 56px;
            padding: 0;
            line-height: 56px;
            right: auto;
        }
    }
`

const HeadNavBox = styled.div`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`

const HeadNavList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    flex: 1;
    flex-wrap: wrap;
    position: relative;
    height: 100px;
    list-style: none;
    height: 56px;
`

const HeadNavItem = styled.li`
    height: 56px;
    margin-left: 20px;
    a{
        /* border-bottom: 2px solid; */
        line-height: 24px;
        font-size: 17px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 8px 10px;
        font-weight: 600;
        &:hover{
            color : skyblue;
            transition: colorcolor .15s ease-in-out;
        }
    }
    ${props =>
        props.active && css`
        border-bottom: 2px solid;
    
    `}
`