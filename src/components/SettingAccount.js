import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SettingAccount = () => {
    //데이터베이스에서 유저 아이디 가져오기
    const useremail = "louis0727@naver.com";

    return (
        <SettingBoxLayout className='container' >
            <SettingBoxForm>
                <TitleBox><h1>계정 설정</h1></TitleBox>
                <LoginInfoBox>
                    <LoginInfoTitleBox><h4>로그인 정보</h4></LoginInfoTitleBox>
                    <LoginInfoEmailBox>
                        <label>이메일</label>
                        <EmailInfoBox>
                            <EmailBox>
                                <i className='fas fa-lg fa-check-circle text-success'></i>
                                <span>{useremail}</span> {/*회원확인해서 아이디(이메일형식) 가져오기 */}
                            </EmailBox>
                            <Link to="#">이메일 주소 변경</Link> {/*이메일 변경 페이지로 이동*/}
                        </EmailInfoBox>
                    </LoginInfoEmailBox>
                    <LoginInfoPwdBox>
                        <label>비밀번호</label>
                        <PwdInfoBox>
                            <Link to="#">비밀번호 변경</Link> {/*비밀번호 변경 페이지로 이동*/}
                        </PwdInfoBox>
                    </LoginInfoPwdBox>
                </LoginInfoBox>
                <hr />
                <OauthBox>
                    <OauthTitleBox><h4>계정연결하기</h4></OauthTitleBox>
                    <OauthNameBox>
                        <label>구글</label>
                        <OauthClickBox>
                            <Link to="#"> {/*구글 계정 연결 API호출*/}
                                <span><i className="fa-brands fa-google"></i></span>
                                <div>구글 계정 연결하기</div> {/*구글로 로그인했다면 로그인한 정보 보여주기*/}
                            </Link>
                        </OauthClickBox>
                    </OauthNameBox>
                    <OauthNameBox>
                        <label>페이스북</label>
                        <OauthClickBox>
                            <Link to="#"> {/*페이스북 계정 연결 API호출*/}
                                <span><i className="fa-brands fa-facebook"></i></span>
                                <div>페이스북 계정 연결하기</div> {/*페이스북으로 로그인했다면 로그인한 정보 보여주기*/}
                            </Link>
                        </OauthClickBox>
                    </OauthNameBox>
                    <OauthNameBox>
                        <label>트위터</label>
                        <OauthClickBox>
                            <Link to="#"> {/*트위터 계정 연결 API호출*/}
                                <span><i className="fa-brands fa-twitter"></i></span>
                                <div>트위터 계정 연결하기</div> {/*트위터로 로그인했다면 로그인한 정보 보여주기*/}
                            </Link>
                        </OauthClickBox>
                    </OauthNameBox>
                    <OauthNameBox>
                        <label>네이버</label>
                        <OauthClickBox>
                            <Link to="#"> {/*네이버 계정 연결 API호출*/}
                                <span><i className="fa-brands fa-neos"></i></span>
                                <div>네이버 계정 연결하기</div> {/*네이버로 로그인했다면 로그인한 정보 보여주기*/}
                            </Link>
                        </OauthClickBox>
                    </OauthNameBox>
                </OauthBox>
                <hr />
                <CertificationBox>
                    <CertiTitleBox><h4>본인 인증</h4></CertiTitleBox>
                    <CertiInfoBox>
                        <CertiList>
                            <CertiItem>본인 인증 설명1</CertiItem>
                            <CertiItem>본인 인증 설명2</CertiItem>
                            <CertiItem>본인 인증 설명3</CertiItem>
                            <CertiItem>본인 인증 설명4</CertiItem>
                            <CertiItem>본인 인증 설명5</CertiItem>
                        </CertiList>
                    </CertiInfoBox>
                    <CertiSettingBox>
                        <button type='button' onClick={onclick}>
                            본인 인증 및 성인물 열람 설정   {/*클릭하면 본인 인증 및 성인물 열람 설정 팝업창 띄우기*/}
                            {/*실제로는 본인인증이 불가능하니 입력하면 무조건 true를 반환하는 API 작성하기*/}
                            {/*true를 반환해서 본인인증을 성공처리하면 데이터베이스에도 본인인증 여부 N -> Y로 바꿔주기*/}
                        </button>
                    </CertiSettingBox>
                    <hr />
                </CertificationBox>
                <AdultContentsControlBox>
                    <div><h4>콘텐츠</h4></div>
                    <SwitchLabel>
                        <DescriptionSpan>성인물 열람</DescriptionSpan>
                        <SwitchSpan>
                            <label className="switch">
                                <input type="checkbox" name='checked' value='1' />
                                <span className="slider round"></span>
                            </label>
                        </SwitchSpan>
                    </SwitchLabel>
                    <DescriptionParagraph>
                        이 기능을 활성화하면 포스타입 전체 서비스 및 개별 채널에 성인물이 표시되고 내용을 열람할 수 있습니다. 본인 인증을 통해 성년인 것이 확인된 사람만 이 기능을 활성화할 수 있습니다.
                    </DescriptionParagraph>
                </AdultContentsControlBox>
                <FormFooterBox>
                    <button>변경 내용 저장</button> {/*button태그에 type을 지정해주지않으면 default는 submit 이다!*/}
                    {/*form 안의 input태그의 name속성과 값을 전송한다 */}
                    {/*해당 페이지에서는 성인물 열람 설정 on/off 값만 전송하면 될 것이다 */}
                    {/*checked=on 값이 넘어가면 데이터베이스에서도 성인물 열람 여부 N->Y 로 바꿔주기*/}
                    <Link to="#">탈퇴하기</Link>    {/*탈퇴하기 페이지로 이동*/}
                </FormFooterBox>
            </SettingBoxForm>
        </SettingBoxLayout>
    );
};

export default SettingAccount;

export const SettingBoxLayout = styled.div`
    padding-right: 26px;
    padding-left: 26px;
    max-width: 692px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    hr {
        margin-bottom: 56px;
        border-top: 1px solid rgba(0,0,0,.125);
    }
    a {
        text-decoration: none;
        outline: none;
        color : currentColor
    }
`
export const SettingBoxForm = styled.form`
    min-width: 100%;

    h4 {
        margin-bottom: 0;
        font-weight: 600;
        font-size: 20px;
        line-height: 1.3;
        word-break: keep-all;
        margin-bottom: 40px;
    }
`
const TitleBox = styled.div`
    margin-top: 112px;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1.3;
    word-break: keep-all;
`
const LoginInfoBox = styled.div`
    margin-top: 56px;
`
const LoginInfoTitleBox = styled.div`
`
const LoginInfoEmailBox = styled.div`
    margin-bottom: 40px;
    display: flex;
    label {
        padding-bottom: 4px;
        padding-right: 10px;
        margin-bottom: 0;
        font-weight: 550;
        font-size: 16px;
        line-height: 20px;
        word-break: keep-all;
        flex: 0 0 25%;
        max-width: 25%;
        position: relative;
        width: 100%;
        min-height: 1px;
        display: inline-block;
    }
`
const EmailInfoBox = styled.div`
    padding-right: 10px;
    padding-left: 10px;
    flex: 0 0 75%;
    max-width: 75%;
    position: relative;
    width: 100%;
    min-height: 1px;
    a{
        color: #000;
        background-color: #fff;
        border-color: #ccc;
        text-decoration: none;
        outline: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 7px 15px;
        font-size: 15px;
        border-radius: 4px;
        border-style: solid ;
        border-width: 1px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        line-height: 1.5rem;
        &:hover {
            color: #007bff;
            border-color: #007bff;
            transition: color .15s ease-in-out,background .15s ease-in-out,border-color .15s ease-in-out;
        }
    }
`
const EmailBox = styled.div`
    margin-bottom: 16px;
    i {
        font-size: 18px;
        line-height: .75em;
        vertical-align: -0.0667em;
        color: #0b5!important;
        padding-right: 3px;
    }
`
const LoginInfoPwdBox = styled.div`
    display: flex;
    margin-bottom: 40px;
    label {
        padding-bottom: 4px;
        padding-right: 10px;
        margin-bottom: 0;
        font-weight: 550;
        font-size: 16px;
        line-height: 20px;
        word-break: keep-all;
        flex: 0 0 25%;
        max-width: 25%;
        position: relative;
        width: 100%;
        min-height: 1px;
        display: inline-block;
    }
`
const PwdInfoBox = styled.div`
    padding-right: 10px;
    padding-left: 10px;
    flex: 0 0 75%;
    max-width: 75%;
    position: relative;
    width: 100%;
    min-height: 1px;
    a{
        color: #000;
        background-color: #fff;
        border-color: #ccc;
        text-decoration: none;
        outline: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 7px 15px;
        font-size: 15px;
        border-radius: 4px;
        border-style: solid ;
        border-width: 1px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        line-height: 1.5rem;
        &:hover {
            color: #007bff;
            border-color: #007bff;
            transition: color .15s ease-in-out,background .15s ease-in-out,border-color .15s ease-in-out;
        }
    }
`
const OauthBox = styled.div`
    margin-top: 56px;
    margin-bottom : 40px;
`
const OauthTitleBox = styled.div`
`
const OauthNameBox = styled.div`
    margin-bottom: 16px!important;
    display: flex;
    flex-wrap: wrap;
    label {
        padding-top: 4px;
        padding-bottom: 4px;
        padding-right: 10px;
        padding-left: 10px;
        margin-bottom: 0;
        font-weight: 550;
        font-size: 17px;
        line-height: 20px;
        word-break: keep-all;
        flex: 0 0 25%;
        max-width: 25%;
        position: relative;
        width: 100%;
        min-height: 1px;
        display: inline-block;
    }
`
const OauthClickBox = styled.div`
    a {
        color: #000;
        background-color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 3px 10px;
        font-size: 14px;
        line-height: 24px;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: #ccc;
        &:hover {
            color: #007bff;
            border-color: #007bff;
            transition: color .15s ease-in-out,background .15s ease-in-out,border-color .15s ease-in-out;
        }
        span {
            padding-right: 4px;
        }
    }
`
const CertificationBox = styled.div`
    margin-top: 56px;
`
const CertiTitleBox = styled.div`
`
const CertiInfoBox = styled.div`
    margin-bottom: 40px;
`
const CertiList = styled.ul`
    padding-left: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`
const CertiItem = styled.li`
`
const CertiSettingBox = styled.div`
    margin-bottom: 40px;
    button {
        cursor: pointer;
        color: #3478ff;
        border-color: #3478ff;
        background-color: transparent;
        &:hover{
            color: white;
            border-color: #007bff;
            background-color: #007bff;
            transition: color .15s ease-in-out,background .15s ease-in-out,border-color .15s ease-in-out;
        }
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 7px 15px;
        font-size: 15px;
        border-radius: 4px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
    }
`
const AdultContentsControlBox = styled.div`
    margin-top: 56px;
`
const SwitchLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    min-height: 24px;
    margin-bottom: 10px;
    line-height: 0;
    cursor: pointer;
`
export const SwitchSpan = styled.span`
    .switch {
        position: relative;
        display: block;
        width: 60px;
        height: 34px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

`
const DescriptionSpan = styled.span`
    display: inline-block;
    padding: 2px 0 8px;
    margin-bottom: 0;
    font-weight: 550;
    font-size: 17px;
    line-height: 20px;
    vertical-align: middle;
`
const DescriptionParagraph = styled.p`
    margin-right: 56px;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
    word-break: keep-all;
    color: #757575;
    display: block;
`
export const FormFooterBox = styled.div`
    margin-bottom: 72px;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        cursor: pointer;
        color: #fff;
        background-color: #3478ff;
        border-color: #3478ff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 7px 15px;
        font-size: 15px;
        border-radius: 4px;
        &:hover{
            color: #fff;
            background-color: #010bff;
            border-color: #010bff;
            transition: color .15s ease-in-out,background .15s ease-in-out,border-color .15s ease-in-out;
        }
    }
    a   {
        padding: 3px 10px;
        font-size: 14px;
        line-height: 24px;
        border-radius: 4px;
        color: #6c757d!important;
        &:hover{
            color: #3478ff!important;
        }
    }
`