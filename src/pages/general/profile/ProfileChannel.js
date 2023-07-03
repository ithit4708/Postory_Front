import { useParams } from 'react-router-dom';
import ProfileTemplate from '../../../components/templates/general/ProfileTemplate';
import { useApiGet } from '../../../hooks/useApi';
import NoContent from '../../../components/molecules/error/NoContent';
import ProfileChannelItem from '../../../components/organisms/general/ProfileChannelItem';
import BtnLinkSC from '../../../components/atoms/Link/BtnLinkSC';
import useUserStore from '../../../stores/useUserStore';

export default function ProfileChannel() {
  const { user } = useUserStore();
  const { nic } = useParams();
  const { data, isLoading, error } = useApiGet(
    `/profile/${encodeURIComponent(nic)}`
  );

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  return (
    data && (
      <ProfileTemplate nic={data.user.nic} data={data}>
        {data.channel.length !== 0 ? (
          data.channel.map((channel) => (
            <ProfileChannelItem key={channel.chnlId} channel={channel} />
          ))
        ) : (
          <>
            <NoContent>
              아직 채널이 없습니다.
              {data.user.eid === user.eid && (
                <BtnLinkSC to="/channel/create">새 채널 만들기</BtnLinkSC>
              )}
            </NoContent>
          </>
        )}
      </ProfileTemplate>
    )
  );
}
