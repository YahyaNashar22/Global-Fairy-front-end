// import React, { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import styles from './SideMenu.module.css'

export default function SideMenu({allChats, setSelectedMessages, setClientId, onlineUsers, setClientName}) {

    
    const [selectedIndex, setSelectedIndex]= useState();
    const [sideOnlineUsers, setSideOnlineUsers] = useState([]);

    const handleClick = (element, index)=>{
      // setChatElement(element);
        setSelectedMessages(element.chat)
        setClientId(element.userid)
        setClientName(element.name)
        console.log("client selected: ", element.name)
        setSelectedIndex(index);
        // console.log("clicked! this element: ", element)
    }

   useEffect(()=>{
    setSideOnlineUsers(onlineUsers);
   }, [onlineUsers])

   console.log("online users: ", sideOnlineUsers);


  return (
    <div>
        {allChats.map((element,index) => {
            return <div className={`${styles.chatItem} ${selectedIndex === index ? styles.selected : ""}`} 
                      onClick={()=>handleClick(element, index)}>
                        <div>{element.name}</div>
                        {sideOnlineUsers.some(item => element.userid === item.id) ? 
                        <span className={styles.onlineButton}>&#x2022;</span>
                        : ""}
                    </div>
        })}
    </div>
  )
}
