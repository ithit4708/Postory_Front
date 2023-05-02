import React from 'react';
import ProfileChannelList from '../components/ProfileChannelList';
import ProfilePostList from '../components/ProfilePostList';
import ProfileSeriesList from '../components/ProfileSeriesList';
import userData from '../UserData';
import channelData from '../KSMChannelData';
import postData from '../KSMPostData';
import seriesData from '../KSMSeriesData';
import { useParams } from 'react-router-dom';

const CreationListBox = () => {
    const params = useParams();
    //임시데이터
    const nic = "KSM"; //세션에 저장될 정보

    const getUser = () => {
        return userData;
    }
    const getChannel = () => {
        return channelData;
    }
    const getPost = () => {
        return postData;
    }
    const getSeries = () => {
        return seriesData;
    }

    //로그인을 성공해서 세션에 저장되어있는 정보와 일치하는 닉네임을 find로 찾아 그 배열요소를 반환
    //배열요소는 객체형태.
    const LoginUserData = getUser().find((user) => user.NIC === nic)

    //로그인에 성공한 유저의 UUID와 채널 데이터에 들어있는 UUID를 확인해서 일치하면 객체 반환.
    const LoginchannelData = getChannel().find((channel) => channel.USER_ID === LoginUserData.USER_ID);
    const LoginPostData = getPost().find((post) => post.USER_ID === LoginUserData.USER_ID);
    const LoginSeriesData = getSeries().find((post) => post.USER_ID === LoginUserData.USER_ID);

    return (
        <>
            {
                params.creation === 'post' ? <ProfilePostList LoginPostData={LoginPostData} />
                    : params.creation === 'series' ? <ProfileSeriesList LoginSeriesData={LoginSeriesData} />
                        : <ProfileChannelList LoginchannelData={LoginchannelData} />
            }
        </>
    );
};

export default CreationListBox;