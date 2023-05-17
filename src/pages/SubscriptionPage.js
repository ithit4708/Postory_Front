import React from 'react';
import SubsciptionHeadNav from '../components/SubscriptionHeadNav';
import ChannelInformation from '../components/ChannelInformation';
import { useParams } from 'react-router-dom';
import PostInformation from '../components/PostInformation';
import styled from 'styled-components';

const SubscriptionPage = () => {
    const { type } = useParams();
    return (
        <SubPageLayoput>
            {
                type === undefined ?
                    <PostInformation />
                    : type === "channel" ?
                        <ChannelInformation />
                        : <></>
            }
        </SubPageLayoput>
    );
};

export default SubscriptionPage;

const SubPageLayoput = styled.div`
    margin-top: 24px;
    margin-bottom: 40px;
    padding-right: 26px;
    padding-left: 26px;
    width: 100%;
    max-width: 692px;
    margin-right: auto;
    margin-left: auto;
`;