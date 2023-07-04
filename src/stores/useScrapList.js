import { create } from 'zustand';

const useScrapList = create((set) => ({
  posts: [],

  // 로그인 유저의 모든 포스트 세팅
  setPosts: (newPosts) => {
    set((state) => ({ ...state, posts: newPosts }));
  },

  // 포스트 하나 설정
  createPost: (newPost) => {
    set((state) => ({
      ...state,
      posts: [...state.posts, newPost],
    }));
  },
  updatePost: (updatedPost) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );
      return { ...state, posts: updatedPosts };
    });
  },
  removePost: (postId) => {
    set((state) => ({
      ...state,
      posts: state.posts.filter((post) => post.postId !== postId),
    }));
  },
}));

export default useScrapList;
