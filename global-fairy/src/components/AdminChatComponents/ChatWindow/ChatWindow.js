import React, { useContext, useEffect, useState } from 'react'
import Chat from '../Chat/Chat.js'
import Input from '../Input/Input.js'
import styles from './ChatWindow.module.css'
import { UserContext } from "../../../context/UserContext.js";

export default function ChatWindow({selectedMessages}) {

    const [username, setUsername] = useState("admin");
    const [messages, setMessages] = useState([]);
    const { user } = useContext(UserContext);
    // setUsername("Current User");

    const sendMessage = (text) => {}

    useEffect(() => {
        // console.log("in useeffect window",user)
        if(user.Role === "user"){
            setUsername("admin");
        }

        if (selectedMessages !== messages) {
          setMessages(selectedMessages);
        }

        return ()=>{}
      }, [selectedMessages, messages, user]);

  return (
    <div className={styles.windowContainer}>
      <h1>Real-Time Chat</h1>
      {console.log("at chatwindowwww",messages)}
      <Chat messages={messages} username={username} />
      <Input sendMessage={sendMessage} />
    </div>
  )
}
