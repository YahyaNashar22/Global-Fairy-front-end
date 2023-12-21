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
    const [username, setUserName] = useState("");
    // const { user } = useContext(UserContext);
    const [clientId, setClientId] = useState("");

   
    const ping = ()=>{
      new Audio(pingSound).play()
  }


  const sendMessage = async(text) => {
    // console.log("at admin chat, user is: ",user)
    console.log("room by userid selected is: ", clientId);
    try{
          
      await axios.post('http://localhost:5000/chat/send', {
          userId: clientId,
           sender: "admin",
            text: text
      }).then((res)=>{
          console.log("message sent!");
          console.log(res.data)
          socket.emit("message", text, clientId);
          // setMessages((prevMessages) => [...prevMessages, res.data[res.data.length]]);
      })
  } catch(err){
      console.log("error sending message", err.message)
  }
  }



    useEffect( ()=>{
      setUserName("admin")
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/chat/all');
          setAllChats(response.data);
          console.log("all data: ",response.data);
          const desiredChat = response.data.find(obj => obj.userid === clientId);
          // console.log("desired chatttttttttt: ", desiredChat.chat);
          setSelectedMessages(desiredChat.chat)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();

    },[selectedMessages, clientId])



    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/chat/all');
        setAllChats(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  //   useEffect(()=>{
  //     // socket.emit("userConnect", user.name);
  //     // setMessages(res.data.chat)
      

  //     const updateMessages = async()=>{
  //         try{
  //             await axios.post('http://localhost:5000/chat/all')
  //             .then((res)=>{
  //                 setMessages(res.data.chat)
  //                 // console.log("rrrr")
  //             })
  //     } catch(err){
  //         console.log(err.message)
  //     }
  // }
  // updateMessages();
  
  // },[selectedMessages])

  useEffect(() => {
      
      // console.log("user name: connected: ",user.name)

      // socket.emit("userConnect", user.name);

      socket.on("connection", () => {
        console.log("Admin Connected to the server!");
      });

      socket.on("message", (data) => {
          console.log("a message was emitted!")
          setSelectedMessages((prevMessages) => [...prevMessages, { text: data, sender: "admin" }]);  
          fetchData(); 
        });

        socket.on("ping", () => {
          ping();
        });
    
        return () => {
          socket.disconnect();
        };
      // },[user, username, messages])
  },[])






  return (
  <>
  <div className={styles.chatContainer}>
    <div className={styles.sideList}>
      <SideMenu allChats={allChats} setSelectedMessages={setSelectedMessages} setClientId={setClientId}/>
    </div>
    <div className={styles.chatOpen}>
      <ChatWindow selectedMessages={selectedMessages} adminusername={username} sendMessage={sendMessage}/>
    </div>
  </div>
  </>

  )
}
