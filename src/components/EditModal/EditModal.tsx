import { useState } from "react";
import type { Post } from "../../types/post";
import css from "./EditModal.module.css";

interface EditModalProps {
  post: Post;
  onCancel: () => void;
  onSave: (title: string, content: string) => void;
}

export default function EditModal({ post, onCancel, onSave }: EditModalProps) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const disabled = title.trim() === "" || content.trim() === "";

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h3 className={css.title}>Edit item</h3>
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

        <div className={css.actions}>
          <button className={css.cancelBtn} onClick={onCancel}>
            Cancel
          </button>

          <button
            className={css.saveBtn}
            disabled={disabled}
            onClick={() => onSave(title, content)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
