import React from 'react'
import styles from "./brandHeader.module.css"

export default function BrandHeader(props) {
  return (
    <div><h1 className={styles.brandTitle}>{ props.name}</h1>  
    </div>
  )
}

