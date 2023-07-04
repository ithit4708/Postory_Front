import NavMenu from '../../molecules/general/NavMenu';
import Nav from '../../organisms/general/Nav';
import Header from '../../organisms/general/Header';
import Main from '../../organisms/general/Main';
import channelData from '../../../tempData/channel/channel.json';
import styled from 'styled-components';

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
  console.log(channelData);
  // TODO: channlUri 변수 처리
  const mainNavLinks = [
    {
      // to: `/channel/${encodeURIComponent(p.nic)}`,
      to: `/channel/buksan`,
      children: '홈',
      end: true,
    },
    {
      // to: `/channel/${encodeURIComponent(p.nic)}/posts`,
      to: `/channel/buksan/posts`,
      children: '포스트',
    },
    {
      // to: `/channel/${encodeURIComponent(p.nic)}/series`,
      to: `/channel/buksan/series`,
      children: '시리즈',
    },
    {
      // to: `/channel/${encodeURIComponent(p.nic)}/about`,
      to: `/channel/buksan/about`,
      children: '소개',
    },
  ];

  return (
    <>
      <Header />
      <Nav>{p.nic}</Nav>
      <Main>
        <Thumbnail imageUrl={channelData.data.channel.chnlImgPath} />
        <CountInfo>
          구독자 {channelData.data.channel.suberCnt}명 · 포스트{' '}
          {channelData.data.channel.chnlPostCnt}개
        </CountInfo>
        <ChannelTitle>{channelData.data.channel.chnlTtl}</ChannelTitle>
        {/* 
        // TODO: 구독하기 버튼 처리
        <div>
          구독하기 버튼
        </div> */}
        <Nav>
          <NavMenu navLinks={mainNavLinks} />
        </Nav>
        <Main>{p.children}</Main>
      </Main>
    </>
  );
}
