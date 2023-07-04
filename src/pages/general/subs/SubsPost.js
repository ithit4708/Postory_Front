import { useEffect } from 'react';
import NoContent from '../../../components/molecules/error/NoContent';
import PostItem from '../../../components/organisms/general/PostItem';
import SubscriptionsTemplate from '../../../components/templates/general/SubscriptionsTemplate';
import { useApiGet } from '../../../hooks/useApi';
import usePostList from '../../../stores/usePostList';

export default function SubsPost() {
  const { isLoading, data, error } = useApiGet(`/subscriptions`);
  const { posts, setPosts } = usePostList();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data, setPosts]);

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  return (
    data && (
      <SubscriptionsTemplate>
        <p>{`총 ${posts.length}개의 포스트`}</p>
        {posts.length !== 0 ? (
          posts.map((post) => <PostItem key={post.postId} post={post} />)
        ) : (
          <>
            <NoContent>구독한 채널이 없습니다.</NoContent>
          </>
        )}
      </SubscriptionsTemplate>
    )
  );
}
