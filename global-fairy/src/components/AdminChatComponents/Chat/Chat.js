import React, { useEffect, useState } from "react";
import styles from "./Chat.module.css";


function Chat({ messages, username }) {
  const [myMessages, setMyMessages] = useState([]);
    // let myMessages = messages || [];

    useEffect(() => {
      // console.log("Messages changed:", messages);
      setMyMessages(messages || []);
    }, [messages]);

  return (
    <>
    {username === "admin" ?
    <div className={styles.chatContainer}>
      {myMessages.map((msg, index) => {
        return( <p key={index} className={`${styles.chatMessage} ${ msg.sender === username ? styles.sent : styles.received}`}>
          {msg.text}
        </p>)
      })}
      <div className={styles.anchor}></div>
    </div>
    :
    <div className={styles.chatContainer}>
      {myMessages.map((msg, index) => {
        return( <p key={index} className={`${styles.chatMessage} ${ msg.sender === "admin" ? styles.received : styles.sent}`}>
          {msg.text}
        </p>)
      })}
      <div className={styles.anchor}></div>
    </div>
}
    </>
  );
}

export default Chat;
