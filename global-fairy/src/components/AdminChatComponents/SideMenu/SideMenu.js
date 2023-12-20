// import React, { useEffect, useState } from 'react'
import styles from './SideMenu.module.css'

export default function SideMenu({allChats, setSelectedMessages}) {

    const handleClick = (element)=>{
        setSelectedMessages(element)
        console.log("clicked!")
    }


  return (
    <div>
        {allChats.map(element => {
            return <div className={styles.chatItem} 
                    onClick={()=>handleClick(element.chat)}>
                    {element.name}</div>
        })}
    </div>
  )
}
