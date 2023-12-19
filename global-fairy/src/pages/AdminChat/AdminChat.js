import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function AdminChat() {
    const [allChats, setAllChats] = useState([]);

    useEffect( ()=>{
        const data =  axios.get('http://localhost:5000/chat/all')
        .then((res)=>{
            console.log(res.data)
            setAllChats(res.data);
            console.log("all chats",allChats)

        })

    },[])
  return (
    <div>AdminChat</div>
  )
}
