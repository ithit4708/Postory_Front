import NavMenu from '../../molecules/general/NavMenu';
import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import styled from 'styled-components';
import { useApiGet } from '../../../hooks/useApi';
import { useParams } from 'react-router-dom';
import useUserStore from '../../../stores/useUserStore';
import { useEffect, useState } from 'react';
import BtnLinkSC from '../../atoms/Link/BtnLinkSC';
import SubscribeBtn from '../../molecules/channel/SubscribeBtn';
import SubscribeBlackBtn from '../../molecules/channel/SubscribeBlackBtn';



const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 16px;
  margin-right: 10px;
  display: inline-block;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  border: 1px solid #efefef;
`;

const CountInfo = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.47);
  margin-top: 30px;
`;

const ChannelTitle = styled.h2`
  margin-top: 4px;
  font-size: 40px;
`;

export default function ChannelTemplate(p) {
  const { chnlUri } = useParams();

  const [url, setUrl] = useState(`/channel/${encodeURIComponent(chnlUri)}`);
  const { data, isLoading, error } = useApiGet(
    url,
    [url]
  );
  useEffect(() => {
    setUrl(`/channel/${encodeURIComponent(chnlUri)}`);
  }, [chnlUri]);

  const { user } = useUserStore();
  const {data: subsData, isLoading: isSubsLoading, error: subsError} = useApiGet(`/channel/${encodeURIComponent(chnlUri)}/subs/${encodeURIComponent(user.nic)}`,[chnlUri])

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  if (!data) {
    return null;
  }

  const isOwner = user.nic === data.data.channelUser.nic;


  const mainNavLinks = [
    {
      to: `/channel/${encodeURIComponent(chnlUri)}`,
      children: '홈',
      end: true,
    },
    {
      to: `/channel/${encodeURIComponent(chnlUri)}/webtoon`,
      children: '웹툰',
    },
    {
      to: `/channel/${encodeURIComponent(chnlUri)}/webnovel`,
      children: '웹소설',
    },
    {
      to: `/channel/${encodeURIComponent(chnlUri)}/about`,
      children: '소개',
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <Thumbnail imageUrl={data.data.channel.chnlImgPath} />
        <CountInfo>
          구독자 {data.data.channel.suberCnt}명 · 포스트{' '}
          {data.data.channel.chnlPostCnt}개
        </CountInfo>
        <ChannelTitle>{data.data.channel.chnlTtl}</ChannelTitle>
        <div style={{ display: 'flex', justifyContent: 'end'}}>
          {isOwner ?
            <BtnLinkSC to={`/${chnlUri}/post/create`}>포스트 발행하기</BtnLinkSC>:
          // <BtnLinkSC to={`/${chnlUri}/post/create`}>구독하기</BtnLinkSC>
           <SubscribeBlackBtn isSubsed={subsData.isSubscribed} chnlId={data.data.channel.chnlId}></SubscribeBlackBtn>
          }
        </div>

        <Nav>
          <NavMenu navLinks={mainNavLinks} />
        </Nav>
        <Main>{p.children}</Main>
      </Main>
    </>
  );
}