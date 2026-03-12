import type { Post } from "../../types/post";
import css from "./Post.module.css";

interface PostCardProps {
  post: Post;
  currentUser: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

function timeAgo(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const minutes = Math.floor(diffSeconds / 60);
  const hours = Math.floor(diffSeconds / 3600);
  const days = Math.floor(diffSeconds / 86400);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;

  return `${days} days ago`;
}

export default function PostCard({
  post,
  currentUser,
  onDelete,
  onEdit,
}: PostCardProps) {
  const isOwner = post.username === currentUser;

  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        <h3 className={css.cardTitle}>{post.title}</h3>

        {isOwner && (
          <div className={css.actions} onClick={() => onDelete(post.id)}>
            <button className={css.iconBtn}>
              <svg width="31" height="30">
                <use href="/icons/sprite.svg#icon-ic_baseline-delete-forever"></use>
              </svg>
            </button>
            <button className={css.iconBtn} onClick={() => onEdit(post.id)}>
              <svg width="31" height="30">
                <use href="/icons/sprite.svg#icon-bx_bx-edit"></use>
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className={css.meta}>
        <span className={css.username}>@{post.username}</span>
        <span className={css.time}>{timeAgo(post.created_datetime)}</span>
      </div>

      <p className={css.content}>{post.content}</p>
    </div>
  );
}
