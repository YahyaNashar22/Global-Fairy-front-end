import React from 'react'
import styles from './ProductNbs.module.css'

export default function ProductNbs() {
  return (
    <div className={styles.nbContainer}>
        <span className={styles.showNb}>Showing  </span> <span className={styles.productNb}>- 2345 - Products </span>
    </div>
  )
}
