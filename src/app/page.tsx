import { fetchAllPosts } from "@/services/posts.services";
import HomePageClient from "./HomePageClient";
import AddPostFormClient from "./AddPostFormClient";

export default async function Home() {
  const posts = await fetchAllPosts();

  return (
    <div>
      <p className="text-3xl text-center font-bold	my-3">ITP GUIDE 2025</p>
      <AddPostFormClient/>
      <HomePageClient postList={posts} />
    </div>
  );
}
