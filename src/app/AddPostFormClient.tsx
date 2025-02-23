"use client";

import { createPosts } from "@/services/posts.services";
import PostForm from "./components/PostForm";
import { usePostStore } from "@/store/posts.store";

const AddPostFormClient: React.FC = () => {
 const { addNewPostAction } =  usePostStore();

  const onSubmitSuccessHandler = async (post: IPost) => {
   const createdPost = await createPosts(post);
   addNewPostAction(createdPost);
  }

  return (
    <div className="bg-slate-300 p-3 m-3 rounded-xl">
      <p>AddFormClient</p>
      <PostForm onSubmitSuccessHandler={onSubmitSuccessHandler}/>
    </div>
  );
};

export default AddPostFormClient;
