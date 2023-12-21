// import React, { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
import styles from './SideMenu.module.css'

export default function SideMenu({allChats, setSelectedMessages, setClientId, onlineUsers}) {

  
    const handleClick = (element)=>{
      // setChatElement(element);
        setSelectedMessages(element.chat)
        setClientId(element.userid)
        console.log("clicked! this element: ", element)
    }

    // useEffect(()=>{
    //   setSelectedMessages(chatElement)
    // },[])

  return (
    <div>
        {allChats.map(element => {
            return <div className={styles.chatItem} 
                    onClick={()=>handleClick(element)}>
                    <div>{element.name}</div>
                    <div className={styles.onlineButton}>{onlineUsers.includes(element.userid) ? " Online": ""}</div>
                    </div>
        })}
    </div>
  )
}
