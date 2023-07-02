import { useParams } from 'react-router-dom';
import ProfileTemplate from '../../../components/templates/general/ProfileTemplate';
import { useApiGet } from '../../../hooks/useApi';
import NoContent from '../../../components/molecules/error/NoContent';
import ProfileChannelItem from '../../../components/organisms/general/ProfileChannelItem';
import BtnLinkSC from '../../../components/atoms/Link/BtnLinkSC';

export default function ProfileChannel() {
  const { nic } = useParams();

  const { data, isLoading, error } = useApiGet(
    `/profile/${encodeURIComponent(nic)}`
  );

  if (isLoading) return <div>로딩되고 있니?</div>;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  console.log('프로필 유저: ');
  return (
    data && (
      <ProfileTemplate nic={data.user.nic} data={data}>
        {data.channel.length !== 0 ? (
          data.channel.map((channel) => (
            <ProfileChannelItem key={channel.chnlId} {...channel} />
          ))
        ) : (
          <>
            <NoContent>
              아직 채널이 없습니다.
              <BtnLinkSC to="/channel/create">새 채널 만들기</BtnLinkSC>
            </NoContent>
          </>
        )}
      </ProfileTemplate>
    )
  );
}
