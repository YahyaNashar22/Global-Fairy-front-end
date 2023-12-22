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
      if (user.Role === "admin") {
        setMessages(selectedMessages);
      }
    }, [user, selectedMessages]);


    useEffect(() => {
      console.log("ChatWindow useEffect triggered:", selectedMessages);
      // ... rest of the code
    }, [user, selectedMessages]);

    // useEffect(() => {
    //     console.log("user in chatwindow window",user)
    //     if(user.Role === "user"){
    //         setUsername(adminusername);
    //     }

    //     if (selectedMessages !== messages) {
    //       setMessages(selectedMessages);
          
    //     }
        
        

    //     return ()=>{}
    //   }, [user]);

  return (
    <div className={styles.windowContainer}>
      <h1 className={styles.chatTitle}>{clientName ? `${clientName}` : "Select Chat"}</h1>
      {console.log("messages at admin chatwindow",messages)}
      <Chat messages={selectedMessages} username={"admin"} />
      <Input sendMessage={sendMessage}/>
    </div>
  )
}
