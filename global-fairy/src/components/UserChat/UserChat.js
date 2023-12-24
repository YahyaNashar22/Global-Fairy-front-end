import React, { useContext, useState } from 'react'
import style from './UserChat.module.css'
import ChatIcon from '../svgIcons/ChatIcon'
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import UserChatComponent from '../UserChatComponent/UserSocket/UserChatComponent';


export default function UserChat() {

    const[chatOpen, setChatOpen]= useState(false);
    const { user } = useContext(UserContext);
    const [savedMessages, setSavedMessages]= useState([]);

    const openChat = async()=>{
        setChatOpen(true);
        updateMessages()
    }
    const closeChat = ()=>{
        setChatOpen(false);
    }


    const updateMessages = async()=>{
            try{
                await axios.post('http://localhost:5000/chat/create', {
                    name: user.name,
                    userid: user.id,
                })
                .then((res)=>{
                    setSavedMessages(res.data.chat)
                })
        } catch(err){
            console.log(err.message)
        }
    }
        
  return (
    <>
    { chatOpen ? 
        <div className={style.openChat}>
            <UserChatComponent closeChat={closeChat} savedMessages={savedMessages}/>
        </div>
    :
    <div className={style.chatButton} onClick={()=>{openChat()}}>
        <p className={style.chatLogo}><ChatIcon/></p>
    </div>
    }
    </>
  )
}
