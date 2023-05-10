import React from 'react';
import styled from 'styled-components';
import { SettingBoxLayout, SettingBoxForm, SwitchSpan, FormFooterBox } from './SettingAccount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SettingProfile = () => {
    //유저가 회원가입시 입력한 닉네임이 들어와야 한다.
    const usernic = '민쾅'
    const [nickname, setNickname] = useState(usernic);
    const [intro, setIntro] = useState('');
    //그리고 입력에 따라 해당 값을 바꿀 수 있고, 상태값으로 관리한다.
    //바꾼 닉네임을 데이테베이스에 저장하면 usernic도 바뀐다.
    const onChangeNick = (e) => {
        setNickname(e.target.value)
    }
    const onChangeIntro = (e) => {
        setIntro(e.target.value)
    }
    const userImgYN = false; //데이터베이스에 유저 이미지가 없다면 false
    const userbasicimg = 'https://via.placeholder.com/64x64?text=basic+image'; //유저 이미자 false면 기본 이미지 보여주기
    const userimg = 'https://via.placeholder.com/64x64/FFFF00/000000?text=user+image'; //유저 이미지가 있다면 해당하는 이미지 경로를 데이터베이스에서 가져와서 보여주기

    return (
        <SettingProfileLayout className='container'>
            <SettingProfileForm>
                <div className='title'><h1>프로필 수정</h1></div>
                <ProfileImgBox className="profile-img-box form-group">
                    <label class="form-label">프로필이미지</label>
                    <div class="img-box">
                        {/* 유저이미지 src 를 조건에 따라 기본이미지와 저장된 이미지로 보여주기 */}
                        <div className='user-img'><img src={userImgYN ? userimg : userbasicimg} alt='유저 이미지' /></div>
                        <div className="img-box-body">
                            <div className="file-selector">
                                <label className="sr-only" for="upload-profile-photo">파일 선택</label>{/* font-awesome: sr-only 웹 접근성 향상*/}
                                <input className="form-control-file" id="upload-image" type="file" name="file" accept="image/gif, image/jpeg, image/png" aria-describedby="fileHelp"></input>
                            </div>
                            <div className="row">
                                <div className="file-help s-text">
                                    <small className="form-text">최대 10MB의 이미지 파일</small>
                                </div>
                                <div className="delete-profile-photo s-text form-text">
                                    <button className="btn-delete" type="button">이미지 삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ProfileImgBox>
                <ProfileNicBox className="nick-box form-group">
                    <label for="name" className="form-label">닉네임</label>
                    <input name="nickname" className="form-control" id="name" placeholder="닉네임" value={nickname} onChange={onChangeNick}></input>
                    <small className="form-text">1자 이상 40자 이내로 입력해주세요.</small>
                </ProfileNicBox>
                <ProfileIntro className="intro form-group">
                    <label for="bio" className="form-label">자기소개</label>
                    <textarea className="form-control" name="intro" id="intro" placeholder="자기소개" value={intro} onChange={onChangeIntro}></textarea>
                </ProfileIntro>
                <MessageControlBox className="message-switch form-group">
                    <label className="switch-control switch-block">
                        <span className="switch-description">메시지 주고받기</span>
                        <MessageSwitchSpan>
                            <label className="switch">
                                <input className="switch-input" type="checkbox" name="use_message" value="1" id="use-message" />
                                <span className="slider round"></span>
                            </label>
                        </MessageSwitchSpan>
                    </label>
                    <p className="form-text">
                        다른 이용자와 메시지를 주고 받을 수 있어요. <Link to="#" class="text-primary">자세히 알아보기</Link>
                    </p>
                </MessageControlBox>
                <SavebuttonBox className="save-button form-group">
                    <button>변경 내용 저장</button>
                    <Link to="#">프로필 삭제</Link>
                </SavebuttonBox>
            </SettingProfileForm>
        </SettingProfileLayout >
    );
};

export default SettingProfile;

const SettingProfileLayout = styled(SettingBoxLayout)`
`
export const SettingProfileForm = styled(SettingBoxForm)`
    .form-group {
        margin-bottom: 40px;
    }
    h1 {
        margin-top: 112px;
        margin-bottom: 0;
        font-weight: 600;
        line-height: 1.3;
        word-break: keep-all;
        margin-bottom: 20px;
    }
    label {
        display: inline-block;
    }
    .form-label {
        padding-top: 0;
        padding-bottom: 8px;
        margin-bottom: 0;
        font-weight: 550;
        font-size: 15px;
        line-height: 20px;
        word-break: keep-all;
    }
    .form-control {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 26px;
        padding: 5px 12px;
        background-color: #fff;
        border: 1px solid #ced4da;
        color: inherit;
        border-color: #ccc;
        border-radius: 4px;
        font-size: 15px;
        /* &:focus {
            border-color: black;
            background-color: black;
            transition: border-color .15s ease-in-out,background-color .15s ease-in-out;
        } */
    }
    textarea:focus, input:focus {
        outline: 0.5px solid #007aff;
    }
    .form-text {
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 20px;
        word-break: keep-all;
        color: #757575;
        display: block;
    }
`

const ProfileImgBox = styled.div`
    margin-bottom: 40px;
    .form-label {
        padding-top: 0;
        padding-bottom: 8px;
        margin-bottom: 0;
        font-weight: 550;
        font-size: 16px;
        line-height: 20px;
        word-break: keep-all;
    }
    .img-box {
        display: flex;
        align-items: flex-start;
    }
    .user-img{
        margin-right: 12px;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        img {
            width: inherit;
            height: inherit;
            vertical-align: top;
            display: flex!important;
            border-style: none;
        }
    }
    .img-box-body {
        flex: 1;
    }
    .file-selector {
        height: 40px;
        line-height: 26px;
        padding: 5px 5px;
        color: inherit;
        border-color: #ccc;
        border-radius: 4px;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        display: block;
        width: 100%;
    }
    .form-control-file {
        font-size: 15px;
        max-width: calc(100% + 10px);
        width: calc(100% + 10px);
        height: 30px;
        display: block;
        overflow: visible;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .s-text {
        position: relative;
        min-height: 1px;
        width: 100%;
    }
    .file-help {
        padding-right: 10px;
        padding-left: 10px;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .form-text {
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 13px;
        line-height: 20px;
        word-break: keep-all;
        color: #757575;
        display: block;
        font-weight: 400;
    }
    .delete-profile-photo {
        margin-top: 8px;
        padding-left: 10px;
        text-align: right!important;
        max-width: 25%;
        width: 100%;
    }
    .btn-delete {
        cursor: pointer;
        color: inherit;
        background-color: transparent;
        border-color: transparent;
        font-size: 14px;
        white-space: nowrap;
        flex: 0 0 25%;
        padding: 0;
        margin: 0;
        border : 0;
    }
`

const ProfileNicBox = styled.div`
    margin-bottom: 40px;
    small {
        margin-top: 9px;
    }
`

const ProfileIntro = styled.div`
    textarea    {
        min-height: 88px;
        padding-top: 9px;
        padding-bottom: 9px;
        line-height: 20px;
        height: auto;
        overflow: auto;
        resize: none;
    }    
`

export const MessageControlBox = styled.div`
    .switch-block {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    }
    .switch-control {
    position: relative;
    min-height: 24px;
    margin-bottom: 0;
    line-height: 0;
    cursor: pointer;
    }
    .switch-description {
    display: inline-block;
    padding: 2px 0 8px;
    margin-bottom: 0;
    font-weight: 550;
    font-size: 15px;
    line-height: 20px;
    vertical-align: middle;
    }
    .form-text {
        margin-top: 8px;
    }
    .text-primary {
        color: #3478ff!important;
    }
`
const MessageSwitchSpan = styled(SwitchSpan)`

`
const SavebuttonBox = styled(FormFooterBox)`
`