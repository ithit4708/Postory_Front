import { useParams } from 'react-router-dom';
import ProfileTemplate from '../../../components/templates/general/ProfileTemplate';
import { useApiGet } from '../../../hooks/useApi';
import NoContent from '../../../components/molecules/error/NoContent';
import ProfilePostItem from '../../../components/organisms/general/ProfilePostItem';
import BtnLinkSC from '../../../components/atoms/Link/BtnLinkSC';

export default function ProfileChannel() {
  const { nic } = useParams();

  const { data, isLoading, error } = useApiGet(
    `/profile/${encodeURIComponent(nic)}/posts`
  );

  if (isLoading) return <div>로딩되고 있니?</div>;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  console.log('프로필 유저: ');
  return (
    data && (
      <ProfileTemplate nic={data.user.nic} data={data}>
        {data.posts.length !== 0 ? (
          data.posts.map((post) => (
            <ProfilePostItem key={post.postId} {...post} />
          ))
        ) : (
          <>
            <NoContent>
              아직 발행한 포스트가 없습니다.
              <BtnLinkSC to="/post/create">포스트 발행하기</BtnLinkSC>
            </NoContent>
          </>
        )}
      </ProfileTemplate>
    )
  );
}
