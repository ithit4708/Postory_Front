import { useEffect } from 'react';
import NoContent from '../../../components/molecules/error/NoContent';
import ChannelItem from '../../../components/organisms/general/ProfileChannelItem';
import SubscriptionsTemplate from '../../../components/templates/general/SubscriptionsTemplate';
import { useApiGet } from '../../../hooks/useApi';
import useSubChannelList from '../../../stores/useSubChannelList';

export default function SubsChannel() {
  const { isLoading, data, error } = useApiGet(`/subscriptions/channel`);
  const { channels, setChannels } = useSubChannelList();

  useEffect(() => {
    if (data) {
      setChannels(data);
    }
  }, [data, setChannels]);

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  return (
    data && (
      <SubscriptionsTemplate>
        <p>{`총 ${channels.length}개의 채널`}</p>
        {channels.length !== 0 ? (
          channels.map((channel) => (
            <ChannelItem key={channel.chnlId} channel={channel} />
          ))
        ) : (
          <NoContent>아직 구독한 채널이 없습니다.</NoContent>
        )}
      </SubscriptionsTemplate>
    )
  );
}
