import { useState } from "react";
import css from "./CreatePost.module.css";

interface CreatePostProps {
  onCreate: (title: string, content: string) => void;
}

export default function CreatePost({ onCreate }: CreatePostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const disabled = title.trim() === "" || content.trim() === "";
  const handleSubmit = () => {
    if (disabled) return;
    onCreate(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className={css.modal}>
      <h3 className={css.title}>What’s on your mind?</h3>
      <p className={css.text}>Title</p>
      <input
        className={css.titleInput}
        placeholder="Hello world"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p className={css.text}>Content</p>
      <textarea
        className={css.contentInput}
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={css.buttonRow}>
      <button className={css.createBtn} disabled={disabled} onClick={handleSubmit}>
        Create
      </button>
      </div>
    </div>
  );
}
