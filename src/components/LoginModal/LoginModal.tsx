import { useState } from "react";
import css from "./LoginModal.module.css";

interface LoginModalProps {
  onEnter: (username: string) => void;
}

export default function LoginModal({ onEnter }: LoginModalProps) {
  const [username, setUsername] = useState<string>("");

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username.trim()) return;
    onEnter(username);
  };

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <form onSubmit={handleSubmit}>
          <h2 className={css.modalTitle}>Welcome to CodeLeap network!</h2>
          <p className={css.text}>Please enter your username</p>
          <input
            type="text"
            placeholder="John Doe"
            value={username}
            onChange={handleInputChange}
            className={css.input}
          />
          <button
            type="submit"
            disabled={!username.trim()}
            className={css.enterBtn}
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
}
