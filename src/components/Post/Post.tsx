import type { Post } from "../../types/post";
import css from './Post.module.css';

interface PostCardProps {
    post: Post;
    currentUser: string;
}

export default function PostCard({post, currentUser}: PostCardProps) {
    
    const isOwner = post.username === currentUser;

    return (
      <div className={css.card}>

      <div className={css.cardHeader}>
        <h3 className={css.cardTitle}>{post.title}</h3>
    
        {isOwner && (
          <div className={css.actions}>
            <button className={css.iconBtn}>🗑</button>
            <button className={css.iconBtn}>✏️</button>
          </div>
        )}
      </div>
    
      <div className={css.meta}>
        <span className={css.username}>@{post.username}</span>
        <span className={css.time}>25 minutes ago</span>
      </div>
    
      <p className={css.content}>{post.content}</p>
    
    </div>
    );

}