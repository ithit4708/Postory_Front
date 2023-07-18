import NoContent from '../../../components/molecules/error/NoContent';
import PostItem from '../../../components/organisms/general/PostItem';
import LibraryTemplate from '../../../components/templates/general/LibraryTemplate';
import { useApiGet } from '../../../hooks/useApi';

export default function LikePost() {
  const { isLoading, data, error } = useApiGet(`/library/like`);

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  return (
    data && (
      <LibraryTemplate>
        <p>{`총 ${data.length}개의 포스트`}</p>
        {data.length !== 0 ? (
          data.map((post) => <PostItem key={post.postId} post={post} />)
        ) : (
          <NoContent>좋아하는 포스트가 없습니다.</NoContent>
        )}
      </LibraryTemplate>
    )
  );
}
