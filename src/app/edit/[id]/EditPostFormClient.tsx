"use client";

import PostForm from "@/app/components/PostForm";
import { editPosts } from "@/services/posts.services";
import { useRouter } from "next/navigation";

interface IEditPostFormClientProps {
  id: string;
}

const EditPostFormClient: React.FC<IEditPostFormClientProps> = ({ id }) => {
  const router = useRouter();

  const onSubmitSuccessHandler = async (post: IPost) => {
    await editPosts(id, post);
    router.push("/");
  };

  return (
    <div className="bg-slate-300 p-3 m-3 rounded-xl">
      <p>Edit Post</p>
      <PostForm onSubmitSuccessHandler={onSubmitSuccessHandler} />
    </div>
  );
};

export default EditPostFormClient;
