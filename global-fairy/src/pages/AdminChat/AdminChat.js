import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import styles from './AdminChat.module.css'
import SideMenu from '../../components/AdminChatComponents/SideMenu/SideMenu.js';
import ChatWindow from '../../components/AdminChatComponents/ChatWindow/ChatWindow.js';
import io from 'socket.io-client';
import pingSound from '../../assets/sounds/ping.mp3'

const socket = io('http://localhost:4500/');

export default function AdminChat() {
    const [allChats, setAllChats] = useState([]);
    const [selectedMessages, setSelectedMessages] = useState([]);
    const [username] = useState("admin");
    const [clientId, setClientId] = useState("");
    const [clientName, setClientName] = useState("");
    const [onlineUsers,setOnlineUsers] = useState([])

   
    const ping = ()=>{
      new Audio(pingSound).play()
  }

  function ISODateFormat() {
    const date = new Date();
    const isoString = date.toISOString();
    return isoString;
  }


  const sendMessage = async(text) => {



    const newMessage = { text: text, sender: "admin", createdAt: ISODateFormat() }
    setSelectedMessages((prevMessages) => [...prevMessages, newMessage]);
    socket.emit("message", text, clientName);  
    try{
          
      await axios.post('http://localhost:5000/chat/send', {
          userId: clientId,
           sender: "admin",
            text: text
      }).then(()=>{
          console.log("message sent!", text);
      })
  } catch(err){
      console.log("error sending message", err.message)
  }
  }

    useEffect( ()=>{
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/chat/all');
          setAllChats(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
      return ()=>{}
    },[])

    useEffect(()=>{
      const desiredChat = allChats.find(obj => obj.userid === clientId) || [];
      setSelectedMessages(desiredChat.chat || [])
      socket.emit("joinRoom", clientName, "admin")

      return ()=>{
        socket.emit("leaveRoom", clientName, "admin" )
      }
    },[clientId, clientName, allChats])


  useEffect(() => {
      
     socket.on("updateOnline", (array)=>{
      setOnlineUsers(array);
     })

      socket.on("connection", () => {

      });

      socket.on("message", (data) => {
        console.log("a message was received!");
        setSelectedMessages((prevMessages) => [...prevMessages, { text: data, sender: clientName, createdAt: ISODateFormat() }]);
        ping();
      });


          
      return ()=>{}
  },[])


  return (
  <>
  <div className={styles.chatHeader}>
    <h1 className={styles.chatHeaderTitle}>Real-Time Chat</h1>
    <button className={styles.headerButtons}>Dashboard</button>
  </div>
  <div className={styles.chatContainer}>
    <div className={styles.sideList}>
      <SideMenu allChats={allChats} setSelectedMessages={setSelectedMessages} setClientId={setClientId} onlineUsers={onlineUsers} setClientName={setClientName}/>
    </div>
    <div className={styles.chatOpen}>
      <ChatWindow selectedMessages={selectedMessages} adminusername={username} sendMessage={sendMessage} clientName={clientName}/>
    </div>
  </div>
  </>

  )
}
