import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext';
import style from './UserChatComponent.module.css'
// import Chat from '../../AdminChatComponents/Chat/Chat';
import Chat from '../UserChat/Chat'
// import Input from '../../AdminChatComponents/Input/Input';
import Input from '../UserInput/Input'
import axios from 'axios';
import io from 'socket.io-client';
import pingSound from '../../../assets/sounds/ping.mp3'
const socket = io('http://localhost:4500/');


export default function UserChatComponent({closeChat, savedMessages}) {

    const [messages, setMessages] = useState(savedMessages);
    const { user } = useContext(UserContext);
    const [username, setUserName] = useState(user.name);

    const ping = ()=>{
        new Audio(pingSound).play()
    }
    
    function ISODateFormat() {
        const date = new Date;
        const isoString = date.toISOString();
        return isoString;
      }

    const sendMessage = async (text) => {

     
        const newMessage = { text: text, sender: user.name, createdAt: ISODateFormat() }
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        socket.emit("message", text, user.name);
        await axios.post('http://localhost:5000/chat/send', {
            userId: user.id,
             sender: user.name,
              text: text
        }).then(()=>{
            console.log("user has sent a message! ", text);
        }).catch((err)=>{
            console.log("error sending a message...!!!", err.message);
        })
    }

  
    useEffect(() => {
        if(user.Role === "user"){

        setUserName(user.name);

        const createChatRoom = async ()=>{
            await axios.post('http://localhost:5000/chat/create', {
                name: user.name,
                userid: user.id,
            })
            .catch((err)=>{
                console.log(err.message)
            })   
        }

        createChatRoom();
            
        socket.on("connection", () => {
            console.log("I connected the room as a user")
            
        });

        socket.emit("userConnected", user.name, user.id);
  
        socket.emit("joinRoom", user.name, user.name)
  
        
  
        socket.on("message", (data) => {
            console.log("user has received a message! ", data)
            setMessages((prevMessages) => [...prevMessages, { text: data, sender: "admin", createdAt: ISODateFormat() }]);  
            ping(); 
        });
  
        return () => {
            socket.emit("leaveRoom", user.name, user.name)
            socket.emit("userDisconnected", user.name, user.id);
        };
    }
// }, [user, socket]);
}, [user]);

return (
    <>
        <div className={style.openChatHeader} onClick={closeChat}>
            <p>Customer Service</p>
            <p className={style.closeBtn}>X</p>
        </div>
        <div className={style.userChatContainer}>
            <Chat messages={messages} username={username}/>
        </div>
        <div className={style.inputContainer}>
            <Input sendMessage={sendMessage}/>
        </div>
    </>
  )
}
