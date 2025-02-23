"use client";

import { deletePosts } from "@/services/posts.services";
import { usePostStore } from "@/store/posts.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IHomePageClientProps {
  postList: IPost[];
}

const HomePageClient: React.FC<IHomePageClientProps> = ({ postList }) => {
  const router = useRouter();
  const { posts, addPostListAction, selectPostAction, deletePostAction } = usePostStore();

  useEffect(() => {
    postList.length && addPostListAction(postList);
  }, [postList]);

  const onClickUpdate = (id: string) => {
    selectPostAction(id);
    router.push(`/edit/${id}`);
  };

  const onClickDelete = async (id: string) => {
    await deletePosts(id);
    deletePostAction(id);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="bg-slate-300 p-3 m-3 rounded-xl">
          <p>Title: {post.title}</p>
          <p>Caption: {post.caption}</p>
          <div className="flex mt-2 gap-2">
            <button
              className="w-full h-8 rounded-lg bg-slate-600 text-white"
              onClick={() => {
                post.id && onClickUpdate(post.id);
              }}
            >
              UPDATE
            </button>
            <button
              className="w-full h-8 rounded-lg bg-slate-600 text-white"
              onClick={() => {
                post.id && onClickDelete(post.id);
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageClient;
