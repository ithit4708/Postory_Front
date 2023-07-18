import NoContent from '../../../components/molecules/error/NoContent';
import PostItem from '../../../components/organisms/general/PostItem';
import SubscriptionsTemplate from '../../../components/templates/general/SubscriptionsTemplate';
import { useApiGet } from '../../../hooks/useApi';

export default function SubsPost() {
  const { isLoading, data, error } = useApiGet(`/subscriptions`);

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  return (
    data && (
      <SubscriptionsTemplate>
        <p>{`총 ${data.length}개의 포스트`}</p>
        {data.length !== 0 ? (
          data.map((post) => <PostItem key={post.postId} post={post} />)
        ) : (
          <NoContent>아직 구독한 채널이 없습니다.</NoContent>
        )}
      </SubscriptionsTemplate>
    )
  );
}
