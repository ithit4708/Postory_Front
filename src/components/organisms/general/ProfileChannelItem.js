import styled from 'styled-components';
import ChannelBanner from '../../molecules/channel/ChannelBanner';
import ChannelInfoSC from '../../atoms/Channel/ChannelInfoSC';

const ProfileChannelItemSC = styled.div`
  & > ${ChannelInfoSC} {
    padding-bottom: 10px;
  }

  & + & {
    border-top: 1px solid ${(p) => p.theme.color.line};
  }
`;

export default function ProfileChannelItem({ channel }) {
  return (
    <ProfileChannelItemSC>
      <ChannelBanner channel={channel} />
      <ChannelInfoSC>{channel.chnlIntro}</ChannelInfoSC>
    </ProfileChannelItemSC>
  );
}
