import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import userData from '../UserData';

const HeadNav = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const goFront = () => {
        navigate(1);
    }

    //임시데이터
    //세션에 저장될 정보
    const nic = "KSM";

    const getUser = () => {
        return userData;
    }
    //로그인을 성공해서 세션에 저장되어있는 정보와 일치하는 닉네임을 find로 찾아 그 배열요소를 반환
    //배열요소는 객체형태.
    const LoginUserData = getUser().find((user) => user.NIC === nic)

    return (
        <NavLayout>
            <NavBox>
                <MoveNavBox onClick={goBack}><i className="fa-solid fa-chevron-left"></i></MoveNavBox>
                <NavCenterBox>{LoginUserData.NIC}</NavCenterBox>
                <MoveNavBox onClick={goFront}><i className="fa-solid fa-chevron-right"></i></MoveNavBox>
            </NavBox>
        </NavLayout>
    );
};

export default HeadNav;

const NavLayout = styled.div`
    position: relative;
    display: block;
    border-bottom: 0.1px solid lightgray;;
`
const NavBox = styled.div`
    margin-right: auto;
    margin-left: auto;
    height: 48px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1052px;
`
const MoveNavBox = styled.div`
    flex: 0 0 4%;
    cursor: pointer;
    font-size: 24px;
`

const NavCenterBox = styled.div`
    max-width: calc(100% - 120px);
    font-size: 18px;
    font-weight: bold; 
`
