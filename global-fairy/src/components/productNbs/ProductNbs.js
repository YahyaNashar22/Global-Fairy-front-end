import React from 'react'
import styles from './ProductNbs.module.css'

export default function ProductNbs() {
  return (
    <div className={styles.nbContainer}>
        <span className={styles.showNb}>Showing 1 - 20 </span> <span className={styles.productNb}>out of 2345 Products </span>
    </div>
  )
}
