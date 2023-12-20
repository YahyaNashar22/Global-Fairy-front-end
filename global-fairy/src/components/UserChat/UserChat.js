import React, { useContext, useEffect, useState } from 'react'
import style from './UserChat.module.css'
import ChatIcon from '../svgIcons/ChatIcon'
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import Chat from '../AdminChatComponents/Chat/Chat';
import Input from '../AdminChatComponents/Input/Input';
import io from 'socket.io-client';

const socket = io('http://localhost:4500/');


export default function UserChat() {

    const[chatOpen, setChatOpen]= useState(false);
    const { user } = useContext(UserContext);
    const [username, setUserName] = useState("john doe");
    const [chatRoom, setChatRoom] = useState({});
    const [messages, setMessages] = useState([]);

    const sendMessage = async (text) => {
        try{
            
            await axios.post('http://localhost:5000/chat/send', {
                userId: user.id,
                 sender: user.name,
                  text: text
            }).then((res)=>{
                console.log("message sent!");
                console.log(res.data)
                socket.emit("message", text, user.id);
                // setMessages((prevMessages) => [...prevMessages, res.data[res.data.length]]);
            })
        } catch(err){
            console.log("error sending message", err.message)
        }
    }

    const openChat = async()=>{
        setChatOpen(true);
        console.log(user);

        try{
            await axios.post('http://localhost:5000/chat/create', {
                name: user.name,
                userid: user.id,
            })
            .then((res)=>{
                setChatRoom(res.data)
                console.log("chat room: ",chatRoom);
                setMessages(res.data.chat)
                console.log("messages", messages);
            })
        } catch(err){
            console.log(err.message)
        }
    }

    const closeChat = ()=>{
        setChatOpen(false);
    }

    useEffect(()=>{
        // socket.emit("userConnect", user.name);
        // setMessages(res.data.chat)

        const updateMessages = async()=>{
            try{
                await axios.post('http://localhost:5000/chat/create', {
                    name: user.name,
                    userid: user.id,
                })
                .then((res)=>{
                    setMessages(res.data.chat)
                })
        } catch(err){
            console.log(err.message)
        }
    }
    updateMessages();
    },[user, messages])

    useEffect(() => {
        setUserName(user.name)
        console.log("user name: connected: ",user.name)

        // socket.emit("userConnect", user.name);

        socket.on("connection", () => {
          console.log("Connected to the server!");
        });

        socket.on("message", (data) => {
            console.log("a message was emitted!")
            // setMessages((prevMessages) => [...prevMessages, { text: data, sender: user.name }]);   
          });
      
          return () => {
            socket.disconnect();
          };
    },[user, username, messages])

    

  return (
    <>
    { chatOpen ? 
        <div className={style.openChat}>
            <div className={style.openChatHeader} onClick={closeChat}>
                <p>Customer Service</p>
                <p className={style.closeBtn}>X</p>
            </div>
            <div className={style.userChatContainer}>
                <Chat messages={messages} username={username} />
                <div className={style.inputContainer}>
                <Input sendMessage={sendMessage}/>
                </div>
            </div>
        </div>
    :
    <div className={style.chatButton} onClick={openChat}>
        <p className={style.chatLogo}><ChatIcon/></p>
    </div>
    }
    </>
  )
}
