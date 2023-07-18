import { useParams } from 'react-router-dom';
import ProfileTemplate from '../../../components/templates/general/ProfileTemplate';
import { useApiGet } from '../../../hooks/useApi';
import NoContent from '../../../components/molecules/error/NoContent';
import PostItem from '../../../components/organisms/general/PostItem';
import BtnLinkSC from '../../../components/atoms/Link/BtnLinkSC';
import useUserStore from '../../../stores/useUserStore';

export default function ProfilePost() {
  const { user } = useUserStore();
  const { nic } = useParams();

  const { data, isLoading, error } = useApiGet(
    `/profile/${encodeURIComponent(nic)}/posts`
  );

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  return (
    data && (
      <ProfileTemplate nic={data.user.nic} data={data}>
        {data.posts.length !== 0 ? (
          data.posts.map((post) => <PostItem key={post.postId} post={post} />)
        ) : (
          <>
            <NoContent>
              아직 발행한 포스트가 없습니다.
              {data.user.eid === user.eid && (
                <BtnLinkSC to="/post/create">포스트 발행하기</BtnLinkSC>
              )}
            </NoContent>
          </>
        )}
      </ProfileTemplate>
    )
  );
}
