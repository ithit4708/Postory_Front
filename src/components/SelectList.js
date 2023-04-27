import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SelectList = ({ handleClickMethod }) => {
    const location = useLocation();

    const onClick = () => {
        handleClickMethod();
    }

    let loginSignupEng = "login"
    let loginSignupKor = "로그인";

    if (location.pathname === '/signup') {
        loginSignupEng = "signup"
        loginSignupKor = "회원가입"
    }


    return (
        <SelectListBox>
            <>
                <Link to="google.com" className="btn-block" id={"btn-" + loginSignupEng + "-google"}>
                    <IconSpan>
                        <i className="fa-brands fa-google"></i>
                    </IconSpan>
                    <TextSpan data-auth="email" className="btn-text">구글로 {loginSignupKor}</TextSpan>
                </Link>
                <Link to="facebook.com" className="btn-block" id={"btn-" + loginSignupEng + "-facebook"} >
                    <IconSpan>
                        <i className="fa-brands fa-facebook"></i>
                    </IconSpan>
                    <TextSpan data-auth="email" className="btn-text">페이스북으로 {loginSignupKor}</TextSpan>
                </Link>
                <Link to="twitter.com" className="btn-block" id={"btn-" + loginSignupEng + "-twitter"} >
                    <IconSpan>
                        <i className="fa-brands fa-twitter"></i>
                    </IconSpan>
                    <TextSpan data-auth="email" className="btn-text">트위터로 {loginSignupKor}</TextSpan>
                </Link>
                <Link to="naver.com" className="btn-block" id={"btn-" + loginSignupEng + "-naver"} >
                    <IconSpan>
                        <i className="fa-brands fa-neos"></i>
                    </IconSpan>
                    <TextSpan data-auth="email" className="btn-text">네이버로 {loginSignupKor}</TextSpan>
                </Link>
                <Link to="#" className="btn-block" id={"btn-" + loginSignupEng + "-email"} onClick={onClick}>
                    <IconSpan>
                        <i className="fas fa-envelope"></i>
                    </IconSpan>
                    <TextSpan data-auth="email" className="btn-text">이메일로 {loginSignupKor}</TextSpan>
                </Link>
            </>
        </SelectListBox>
    );
};

export default SelectList;

const SelectListBox = styled.div`
    width: 100%;
    margin: 0 auto 20px;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn-block {
        font-weight: 300;
        margin-top: 12px;
        padding: 11px 20px;
        font-size: 15px;
        border-radius: 4px;
        color: #000;
        background-color: #fff;
        display: flex;
        width: 100%;
        text-align: left;
        align-items: center;
        position: relative;
        line-height: 1.5rem;
        background: none;
        border: 1px solid #ccc;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        white-space: nowrap;

        &:hover {
            background-color : powderblue ;
            transition: background-color .4s;
        }
    }
`

const IconSpan = styled.span`
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    border-radius: 4px;
    margin-right: 1rem;
    box-sizing: border-box;

    i {
        color: #a0a0a0;
        font-size: 20px;
        font-weight: 900;
    }
`

const TextSpan = styled.span`
    font-size: 12.5px;
    font-weight: 450;
`