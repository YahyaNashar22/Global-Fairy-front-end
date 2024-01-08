import React, { useState } from "react";
import styles from "./Input.module.css";

function Input({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputForm}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.inputField}
      />
      <button type="submit" className={styles.sendButton}>
        Send
      </button>
    </form>
  );
}

export default Input;
