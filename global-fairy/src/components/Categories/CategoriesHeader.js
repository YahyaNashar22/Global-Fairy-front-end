import React from 'react'
import styles from "./CategoriesHeader.module.css"

export default function CategoriesHeader({ categories, changeCategory, shown, isLoading }) {

  const change = (index) => {
    changeCategory(index);
  }

  return (
    isLoading ? (
      <section className={styles.CategoriesHeader}>
        <h3 className={styles.categoryName} >Category..</h3>
        <h3 className={styles.categoryName} >Category..</h3>
        <h3 className={styles.categoryName} >Category..</h3>
      </section>
    ) : (
      <section className={styles.CategoriesHeader}>
        {categories.map((elt, index) => (
          <h3 onClick={() => change(index)} className={elt.name === shown.name ? styles.selectedCategory : styles.categoryName} key={index}>{elt.name}</h3>
        )
        )}
      </section>
    )
  )
}

