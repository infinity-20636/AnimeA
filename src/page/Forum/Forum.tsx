import { useState, type FC, FormEvent } from "react";
import "./Forum.scss";

export interface IForumProps {}

const Forum: FC<IForumProps> = () => {
  const [message, setMessage] = useState<string>(""); 
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); 
    if (message.trim()) { 
      setMessages([...messages, message]); 
      setMessage(""); 
    }
  };

  return (
    <section className="section">
      <div className="big__form">
      <div className="forum">
        <div className="forum__messages">
          {messages.map((msg, index) => (
            <p key={index} className="forum__message">
              {msg}
            </p>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="forum__form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите ваше сообщение"
            className="forum__input"
          />
          <button type="submit" className="forum__button">
            Отправить
          </button>
        </form>
        </div>
    </section>
  );
};

export default Forum;