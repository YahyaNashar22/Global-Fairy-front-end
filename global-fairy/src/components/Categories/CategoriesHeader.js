import React from 'react'
import styles from "./CategoriesHeader.module.css"

export default function CategoriesHeader() {
  return (
    <section className={styles.CategoriesHeader}>
        <h3>Clothes</h3>
        <h3>Shoes</h3> 
        <h3>Makeup</h3>

    </section>
  )
}
