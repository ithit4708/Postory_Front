import React from 'react';
import styled from 'styled-components';
import SettingAccount from '../components/SettingAccount';
import { useParams } from 'react-router-dom';
import SettingProfile from '../components/SettingProfile';
import SettingNoti from '../components/SettingNoti';
import SettingBlock from '../components/SettingBlock';

const AccountSettingsPages = () => {
    const { type } = useParams();
    return (
        <>  {/*URL 파라미터에 조건부 렌더링*/}
            {type === 'profile' ?
                <SettingProfile />
                : type === 'notification' ?
                    <SettingNoti />
                    : type === 'block' ?
                        <SettingBlock />
                        : //URL 파라미터에 아무겂도 없이 undefined를 반환할때 '계정 설정' 보여주기
                        <SettingAccount />
            }
        </>
    );
};

export default AccountSettingsPages;