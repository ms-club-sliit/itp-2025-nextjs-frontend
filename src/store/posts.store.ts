import { create } from "zustand";

export type PostState = {
  posts: IPost[];
  selectedPost: IPost | null;
};

export type PostActions = {
  addPostListAction: (postList: IPost[]) => void;
  addNewPostAction: (post: IPost) => void;
  selectPostAction: (id: string) => void;
  deletePostAction: (id: string) => void;
};

export type PostStore = PostState & PostActions;

export const defaultInitState: PostState = {
  posts: [],
  selectedPost: null
};

export const usePostStore = create<PostStore>()((set) => ({
  ...defaultInitState,
  addPostListAction: (postList: IPost[]) => {
    set(() => ({
      posts: postList,
    }));
  },
  addNewPostAction: (post: IPost) => {
    set((state) => ({
      posts: [...state.posts, post],
    }));
  },
  selectPostAction: (id: string) => {
    set((state) => ({
      selectedPost: state.posts.find(post => post.id === id),
    }));
  },
  deletePostAction: (id: string) => {
    set((state) => ({
      posts: state.posts.filter(post => post.id !== id),
    }));
  },
}));
