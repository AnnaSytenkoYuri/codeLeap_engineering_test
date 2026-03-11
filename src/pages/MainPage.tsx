import { useEffect, useState } from "react";
import { createPost, getPost } from "../services/api";
import css from "./MainPage.module.css";
import PostCard from "../components/Post/Post";
import type { Post } from "../types/post";
import CreatePost from "../components/CreatePost/CreatePost";

interface MainPageProps {
  username: string;
}

export default function MainPage({ username }: MainPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPost = async () => {
    const data = await getPost();
    const sortedData = data.sort(
      (a, b) =>
        new Date(b.created_datetime).getTime() -
        new Date(a.created_datetime).getTime()
    );
    setPosts(sortedData);
  };

  const handleCreatePost = async (title: string, content: string) => {
    await createPost({
      username,
      title,
      content,
    });
    fetchPost();
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPost();
    };
    fetchData();
  }, []);

  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <div className={css.titleHeader}>
          <h1 className={css.modalTitle}>CodeLeap Network</h1>
        </div>

        <CreatePost onCreate={handleCreatePost} />

        {posts.map((post) => (
          <PostCard
            key={post.created_datetime}
            post={post}
            currentUser={username}
          />
        ))}
      </div>
    </div>
  );
}
