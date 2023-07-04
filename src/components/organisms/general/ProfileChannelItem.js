import styled from 'styled-components';
import ChannelBanner from '../../molecules/channel/ChannelBanner';
import ChannelInfoSC from '../../atoms/Channel/ChannelInfoSC';
import { useNavigate } from 'react-router';

const ProfileChannelItemSC = styled.div`
  & > ${ChannelInfoSC} {
    padding-bottom: 10px;
  }

  & + & {
    border-top: 1px solid ${(p) => p.theme.color.line};
  }
`;

export default function ProfileChannelItem({ channel }) {
  const navigate = useNavigate();

  const goChannel = () => {
    navigate(`/channel/${channel.chnlUri}`);
  };

  return (
    <ProfileChannelItemSC>
      <ChannelBanner channel={channel} onClick={goChannel} />
      <ChannelInfoSC onClick={goChannel}>{channel.chnlIntro}</ChannelInfoSC>
    </ProfileChannelItemSC>
  );
}
