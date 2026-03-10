import { useState } from "react";
import css from './LoginModal.module.css';

interface LoginModalProps {
    onEnter: (userName: string) => void
}

export default function LoginModal({onEnter}: LoginModalProps) {

    const [userName, setUserName] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleEnter = () => {
        if (!userName.trim()) return;
        onEnter(userName);
      };


    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                <h2 className={css.modalTitle}>Welcome to CodeLeap network!</h2>
                <p className={css.text}>Please enter your username</p>
                <input 
                type="text" 
                placeholder="John Doe"
                value={userName}
                onChange={handleInputChange}
                className={css.input}
                />
                <button 
                disabled={!userName.trim()}
                onClick={handleEnter}
                className={css.enterBtn}
                >ENTER</button>

            </div>

        </div>
    );

}
