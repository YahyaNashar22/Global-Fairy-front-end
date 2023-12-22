// import React, { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
import { useState } from 'react'
import styles from './SideMenu.module.css'

export default function SideMenu({allChats, setSelectedMessages, setClientId, onlineUsers, setClientName}) {

    const [selectedIndex, setSelectedIndex]= useState();

    const handleClick = (element, index)=>{
      // setChatElement(element);
        setSelectedMessages(element.chat)
        setClientId(element.userid)
        setClientName(element.name)
        setSelectedIndex(index);
        console.log("clicked! this element: ", element)
    }

    // useEffect(()=>{
    //   setSelectedMessages(chatElement)
    // },[])

  return (
    <div>
        {allChats.map((element,index) => {
            return <div className={`${styles.chatItem} ${selectedIndex === index ? styles.selected : ""}`} 
                    onClick={()=>handleClick(element, index)}>
                    <div>{element.name}</div>
                    <div className={styles.onlineButton}>{onlineUsers.includes(element.userid) ? " Online": ""}</div>
                    </div>
        })}
    </div>
  )
}
