import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = ({ children }) => {
    return (
        <LoginLayout>
            <LoginHead>포스토리 로그인</LoginHead>
            <PhraseParagraph>POSTORY에 돌아오신 것을 환영해요!</PhraseParagraph>
            <div className='select-list'>{children}</div>
            <NoIdParagraph>
                <NoIdSpan>계정이 없으세요?</NoIdSpan>
                <Link to="/signup">회원가입</Link>
            </NoIdParagraph>
            <hr />
            <ResetFindParagraph>
                <Link to="/resetpassword" marginright="10px" >비밀번호 재설정</Link>
                ·
                <Link to="/findId" marginleft="10px" >계정 찾기</Link>
            </ResetFindParagraph>
        </LoginLayout>
    )
};

export default LoginContainer;

//레이아웃 배치, 가운데 정렬, 크기제한
const LoginLayout = styled.div`
    margin: 30px auto;
    padding: 100px 26px;
    display: block;
    max-width: 372px;

    a {
    color: #000;
    margin-left : ${props => props.marginleft || 'auto'};
    margin-right: ${props => props.marginright || 'auto'};
    display : ${props => props.display || 'inline'};
        &:hover {
            text-decoration: none;
        }
    }
`

const LoginHead = styled.h1`
    margin: 0 auto 16px;
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    color: #000;
`

const PhraseParagraph = styled.p`
    word-break: keep-all;
    text-align:justify;
    margin: 0 auto 8px;
    line-height: 1.4;
    font-size: 15px;
    color: #606060;
    background-color: #fff;
    font-weight: lighter;
`

const NoIdParagraph = styled.p`
    margin: 0 auto 12px;
    line-height: 1.4;
`

const NoIdSpan = styled.span`
    margin-right: 4px;
`

const ResetFindParagraph = styled.p`
    margin: 0 auto 12px;
    line-height: 1.4;
    margin-right: 4px;
    color: #000;
    display: inline-block;
`