import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfilePostList = (props) => {

    const { LoginPostData } = props;
    return (
        <ChannelListLayout className='ChannelList'>
            <ChannelListBox>
                <ChannelHeadBox className='headbox'>
                    <Link to="#" className='channel-avatar'>
                        <img className='channel-img' src={LoginPostData.CHANNEL_IMG} alt='채널이미지' />
                    </Link>
                    <Link to="#" className='channel-title-sub'>
                        <h4>{LoginPostData.CHANNEL_TITLE}</h4>
                        <small>구독자
                            <span> {LoginPostData.SUBR_CNT}명</span>
                        </small>
                    </Link>
                    <Link to="#" className='go-channel'>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </ChannelHeadBox>
                <ChannelbodyBox>
                    <Link to='#'>{LoginPostData.CHANNEL_INTRO}</Link>
                </ChannelbodyBox>
            </ChannelListBox>
        </ChannelListLayout>
    );
};

export default ProfilePostList;

const ChannelListLayout = styled.div`
    @media screen and (min-width: 768px) {
        margin-top: 56px;
    }
    /* margin-top: 48px; */
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 50px;

`
const ChannelListBox = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.1);
`
const ChannelHeadBox = styled.div`
    position: relative;
    padding: 20px 0;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    a{
        text-decoration: none;
        outline: none;
        color: currentColor;
    }

    .channel-avatar {
        margin-right: 12px;
        width: 64px;
        height: 64px;
        border-radius: 7.5%;
        position: relative;
        overflow: hidden;
        background-color: #fff;
    }
    .channel-img {
        width: inherit;
        height: inherit;
        vertical-align: top;
    }
    .channel-title-sub {
        overflow: hidden;
        flex: 1;
        h4 {
            @media screen and (min-width: 768px){
                margin-bottom: 6px;
                font-size: 18px;
                line-height: 21px;
            }
            margin-bottom: 4px;
            font-size: 17px;
            line-height: 21px;
            font-weight: 600;
            display: -webkit-box;
            max-height: 42px;
            word-break: break-word;
            margin-top: 0;
            overflow: hidden;
        }
        small {
            @media screen and (min-width: 768px){
                font-size: 15px;
                line-height: 16px;
                max-height: 4em;
            }
            font-size: 13px;
            line-height: 16px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            max-height: 4em;
            color: #909090;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 0!important;
            font-weight: 400;
        }
    }
`
const ChannelbodyBox = styled.div`
    @media screen and (min-width: 768px){
            padding: 0 0 20px 0;
        }
    display: block;
    position: relative;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    padding: 0 0 20px 0;
    overflow: hidden;
    margin-top: 0!important;
    a{
        color: currentColor;
        text-decoration: none;
        outline: none;
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        color: #909090;
        display: -webkit-box;
        font-weight: 550;
        @media screen and (min-width: 768px){
            font-size: 15px;
            line-height: 20px;
            overflow: hidden;
            color: #909090;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            max-height: 40px;
        }
    }
`