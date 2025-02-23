"use client";

import { usePostStore } from "@/store/posts.store";
import { useEffect, useState } from "react";

interface IPostFormProps {
  onSubmitSuccessHandler: (post: IPost) => void;
}

const PostForm: React.FC<IPostFormProps> = ({ onSubmitSuccessHandler }) => {
  const { selectedPost } = usePostStore();
  const [postDetails, setPostDetails] = useState({
    userId: "",
    title: "",
    caption: "",
  });

  useEffect(() => {
    if (selectedPost) {
      setPostDetails((prevState) => ({
        ...prevState,
        userId: selectedPost.userId,
        title: selectedPost.title,
        caption: selectedPost.caption,
      }));
    }
  }, [selectedPost]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = () => {
    onSubmitSuccessHandler(postDetails);
  };

  return (
    <div>
      <div className="mb-2 mt-2">
        <p>User Id</p>
        <input
          type="text"
          name="userId"
          className="w-full h-8 pl-2 rounded-lg"
          onChange={onChangeHandler}
          value={postDetails.userId}
        />
      </div>
      <div className="mb-2">
        <p>Title</p>
        <input
          type="text"
          name="title"
          className="w-full h-8 pl-2 rounded-lg"
          onChange={onChangeHandler}
          value={postDetails.title}
        />
      </div>
      <div className="mb-2">
        <p>Caption</p>
        <input
          type="text"
          name="caption"
          className="w-full h-8 pl-2 rounded-lg"
          onChange={onChangeHandler}
          value={postDetails.caption}
        />
      </div>
      <div>
        <button
          className="mt-2 w-full h-8 rounded-lg bg-slate-600 text-white"
          onClick={onSubmitHandler}
        >
          {selectedPost ? "EDIT" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default PostForm;
