import { useEffect } from 'react';
import LibraryTemplate from '../../../components/templates/general/LibraryTemplate';
import { useApiGet } from '../../../hooks/useApi';
import PostItem from '../../../components/organisms/general/PostItem';
import NoContent from '../../../components/molecules/error/NoContent';
import useScrapList from '../../../stores/useScrapList';

export default function ScrapPost() {
  const { isLoading, data, error } = useApiGet(`/library/scrap/`);
  const { posts, setPosts, removePost } = useScrapList();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data, setPosts]);

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;

  return (
    <LibraryTemplate>
      <p>{`총 ${posts.length}개의 포스트`}</p>
      {posts.length !== 0 ? (
        posts.map((post) => (
          <PostItem key={post.postId} post={post} onAfterUnscrap={removePost} />
        ))
      ) : (
        <NoContent>스크랩한 포스트가 없습니다.</NoContent>
      )}
    </LibraryTemplate>
  );
}
