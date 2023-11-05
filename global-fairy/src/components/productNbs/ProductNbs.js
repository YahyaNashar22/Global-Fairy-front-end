import React from 'react'
import styles from './ProductNbs.module.css'

export default function ProductNbs(props) {
  return (
    <div className={styles.nbContainer}>
        <span className={styles.showNb}>Showing  </span> <span className={styles.productNb}>- {props.productsNb} - Products </span>
    </div>
  )
}
