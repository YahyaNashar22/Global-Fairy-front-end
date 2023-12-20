import React from "react";
import styles from "./Chat.module.css";


function Chat({ messages, username }) {
    
    let myMessages = messages || [];
  return (
    <div className={styles.chatContainer}>
      {myMessages.map((msg, index) => {
        return( <p
          key={index}
          className={`${styles.chatMessage} ${
            msg.sender === username ? styles.sent : styles.received
          }`}
        >
          {msg.text}
        </p>)
})}
    </div>
  );
}

export default Chat;
