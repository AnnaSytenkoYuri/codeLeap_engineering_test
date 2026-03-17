import { useEffect, useState } from "react";
import { createPost, deletePost, getPost, updatePost } from "../services/api";
import css from "./MainPage.module.css";
import PostCard from "../components/Post/Post";
import type { Post } from "../types/post";
import CreatePost from "../components/CreatePost/CreatePost";
import DeleteModal from "../components/DeleteModal/DeleteModal";
import EditModal from "../components/EditModal/EditModal";

interface MainPageProps {
  username: string;
}

export default function MainPage({ username }: MainPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const [deletedPostId, setDeletedPostId] = useState<number | null>(null);

  const [editedPostId, setEditedPostId] = useState<number | null>(null);

  const handlePostDelete = (postId: number) => {
    setDeletedPostId(postId);
  };

  const confirmDelete = async () => {
    if (!deletedPostId) return;

    await deletePost(deletedPostId);
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== deletedPostId)
    );
    setDeletedPostId(null);
  };

  const handlePostEdit = (postId: number) => {
    setEditedPostId(postId);
  };

  const handleSaveEdit = async (title: string, content: string) => {
    if (!editedPostId) return;

    await updatePost(editedPostId, title, content);
    await fetchPost();
    setEditedPostId(null);
    setDeletedPostId(null);
  };

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
            key={post.id}
            post={post}
            currentUser={username}
            onDelete={handlePostDelete}
            onEdit={handlePostEdit}
          />
        ))}
        {deletedPostId && (
          <DeleteModal
            onCancel={() => setDeletedPostId(null)}
            onConfirm={confirmDelete}
          />
        )}
        {editedPostId && (
          <EditModal
            post={posts.find((post) => post.id === editedPostId) as Post}
            onCancel={() => {setEditedPostId(null); setDeletedPostId(null)}}
            onSave={handleSaveEdit}
          />
        )}
      </div>
    </div>
  );
}
