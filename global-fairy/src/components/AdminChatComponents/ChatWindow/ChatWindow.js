import React, { useContext, useEffect, useState } from 'react'
import Chat from '../Chat/Chat.js'
import Input from '../Input/Input.js'
import styles from './ChatWindow.module.css'
import { UserContext } from "../../../context/UserContext.js";

export default function ChatWindow({selectedMessages, adminusername, sendMessage, clientName}) {

    const [username, setUsername] = useState("admin");
    const [messages, setMessages] = useState([]);
    const { user } = useContext(UserContext);
    
    // setUsername("Current User");



    useEffect(() => {
        console.log("user in chatwindow window",user)
        if(user.Role === "user"){
            setUsername(adminusername);
        }

        if (selectedMessages !== messages) {
          setMessages(selectedMessages);
          
        }
        
        

        return ()=>{}
      }, [selectedMessages, messages, user, adminusername]);

  return (
    <div className={styles.windowContainer}>
      <h1 className={styles.chatTitle}>{clientName ? `${clientName}` : "Select Chat"}</h1>
      {console.log("messages at admin chatwindow",messages)}
      <Chat messages={selectedMessages} username={username} />
      <Input sendMessage={sendMessage}/>
    </div>
  )
}
