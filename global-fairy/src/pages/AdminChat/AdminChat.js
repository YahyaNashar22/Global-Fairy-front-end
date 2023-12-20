import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './AdminChat.module.css'
import SideMenu from '../../components/AdminChatComponents/SideMenu/SideMenu.js';
import ChatWindow from '../../components/AdminChatComponents/ChatWindow/ChatWindow.js';

export default function AdminChat() {
    const [allChats, setAllChats] = useState([]);
    const [selectedMessages, setSelectedMessages] = useState([]);

    useEffect( ()=>{
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/chat/all');
          setAllChats(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();

    },[])

  return (
  <>
  <div className={styles.chatContainer}>
    <div className={styles.sideList}>
      <SideMenu allChats={allChats} setSelectedMessages={setSelectedMessages}/>
    </div>
    <div className={styles.chatOpen}>
      <ChatWindow selectedMessages={selectedMessages}/>
    </div>
  </div>
  </>

  )
}
