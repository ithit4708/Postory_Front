import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userData from '../UserData';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [msg, setMessage] = useState('');
    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    const getUser = () => {
        return userData;
        //JSON을 받아오는 함수
    }

    const onSubmit = (e) => {
        if (email.length === 0) {
            e.preventDefault();
            setMessage('※이메일을 입력해주세요');
            return false;
        }
        if (password.length === 0) {
            e.preventDefault();
            setMessage('※비밀번호를 입력해주세요');
            return false;
        }
        if (nickname.length === 0) {
            e.preventDefault();
            setMessage('※닉네임을 입력해주세요');
            return false;
        }
        e.preventDefault();
        const regUserData = {
            email,
            password,
            nickname,
            userId: getUser()[0].USER_ID,
        };
        //브라우저
        const existingData = JSON.parse(localStorage.getItem('userData')) || []; // 로컬 스토리지에 저장되어있는 데이터를 배열로 가져옴. 만약 저장된 데이터가 없다면 빈 배열을 사용.
        const newData = [...existingData, regUserData]; // 기존 데이터와 새로운 데이터를 합칩.
        localStorage.setItem('userData', JSON.stringify(newData)); // 합쳐진 데이터를 다시 로컬 스토리지에 저장.
        alert(`회원가입 성공! 환영합니다 ${nickname}님!`)
        navigate("/")
    }

    return (
        <FormLayout>
            <FormSection>
                <LoginHead>로그인</LoginHead>
                <SubmitForm onSubmit={onSubmit} className='submit-form'>
                    <InputBox>
                        <Lable htmlFor='email'>이메일</Lable>
                        <ValueInput
                            type="email"
                            id='email'
                            placeholder="이메일"
                            name="input_email"
                            value={email}
                            autoFocus
                            onChange={onChangeEmail}
                        />
                    </InputBox>
                    <InputBox>
                        <Lable htmlFor='password'>비밀번호</Lable>
                        <ValueInput
                            type="password"
                            id="password"
                            placeholder="비밀번호 "
                            name="input_pwd"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </InputBox>
                    <InputBox>
                        <Lable htmlFor='email'>닉네임</Lable>
                        <ValueInput
                            type="text"
                            id='text'
                            placeholder="닉네임"
                            name="input_nic"
                            value={nickname}
                            autoFocus
                            onChange={onChangeNickname}
                        />
                    </InputBox>
                    <FormCheckBox>
                        <h3>{msg}</h3>
                    </FormCheckBox>
                    <Button type="submit">
                        회원가입
                    </Button>
                </SubmitForm>
                <hr />
                <ResetFindBox>
                    <Link marginright="10px" href="/resetpassword">비밀번호 재설정 </Link>
                    ·
                    <Link marginleft="10px" href="/findId"> 계정 찾기</Link>
                </ResetFindBox>
                <hr />
            </FormSection>
        </FormLayout>
    );
};

export default SignupForm;

//레이아웃 배치, 가운데 정렬, 크기 제한
const FormLayout = styled.div`
    margin: 10px auto;
    padding: 100px 26px;
    display: block;
    max-width: 372px;
`
//시멘틱태그 section 사용, 텍스트 정렬, 색 지정 
const FormSection = styled.section`
    color: #606060;
    background-color: #fff;
    text-align: left;
    font-size: 14px;
    hr {
        margin: 24px auto;
    }
`

const SubmitForm = styled.form`

`
const LoginHead = styled.h1`
    margin: 0 auto 16px;
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    color: #000;
`

const InputBox = styled.div`
    margin: 0 auto 24px;
`

const Lable = styled.label`
    padding-bottom: 4px;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    display: inline-block;
`

const ValueInput = styled.input`
    padding: 10px 8px;
    font-size: 16px;
    border-radius: 4px;
    height: 40px;
    line-height: 26px;
    border-radius: 8px;
    display: block;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ced4da;
`

const Button = styled.button`
    width : 100%;
    margin: 24px auto 12px;
    padding: 11px 20px;
    cursor: pointer;
    font-size: 13px;
    border-radius: 4px;
    font-weight: 600;
    color: #fff;
    background-color: #3478ff;
    border-color: #3478ff;
    /* transition: color .15s ease-in-out,background .15s ease-in-out,border-color .15s ease-in-out; */
`

const ResetFindBox = styled.div`
    line-height: 1.3;
    a {
    color: currentColor;
    margin-left : ${props => props.marginleft || 'auto'};
    margin-right: ${props => props.marginright || 'auto'};
    display : ${props => props.display || 'inline'};
    text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

const FormCheckBox = styled.div`
    color: red;
    font-size : 9px;
`