import styled from 'styled-components';
import ChannelImg from '../../atoms/Channel/ChannelImg';
import ChannelTitleSC from '../../atoms/Channel/ChannelTitleSC';
import ChannelInfoSC from '../../atoms/Channel/ChannelInfoSC';
import SubscribeBtn from './SubscribeBtn';

const ChannelBannerSC = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;

  & * {
    cursor: pointer;
  }

  .info {
    flex: 1;
  }
`;

export default function ChannelBanner({ onClick, channel }) {
  const suberCnt = Number(channel.suberCnt).toLocaleString();

  return (
    <ChannelBannerSC>
      <ChannelImg src={channel.chnlImgPath} onClick={onClick} />
      <div className="info" onClick={onClick}>
        <ChannelTitleSC className="title">{channel.chnlTtl}</ChannelTitleSC>
        <ChannelInfoSC className="suberCnt">구독자 {suberCnt} 명</ChannelInfoSC>
      </div>
      <SubscribeBtn isSubsed={channel.isSubsed} chnlId={channel.chnlId} />
    </ChannelBannerSC>
  );
}
