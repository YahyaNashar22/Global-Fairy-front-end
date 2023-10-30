import React from 'react'
import styles from "./CategoriesHeader.module.css"

export default function CategoriesHeader() {
  return (
    <section className={styles.CategoriesHeader}>
        <h3 className={styles.categoryName}>Clothes</h3>
        <h3 className={styles.categoryName}>Shoes</h3> 
        <h3 className={styles.categoryName}>Makeup</h3>

    </section>
  )
}
