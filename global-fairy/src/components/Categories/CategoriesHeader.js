import React from 'react'
import styles from "./CategoriesHeader.module.css"

export default function CategoriesHeader({ categories, changeCategory, shown, isLoading }) {

  const categoriesAll = categories
  const shownC = shown
  const loading = isLoading
  console.log("headerrr catego sh" + shownC)
  const change = (index) => {
    changeCategory(index);
  }

  return (
    loading ? (
      <section className={styles.CategoriesHeader}>

        <h3 className={styles.categoryName} >Category..</h3>
        <h3 className={styles.categoryName} >Category..</h3>
        <h3 className={styles.categoryName} >Category..</h3>
      </section>


    ) : (

      <section className={styles.CategoriesHeader}>

        {categoriesAll.map((elt, index) => (
          <h3 onClick={() => change(index)} className={elt.name === shownC.name ? styles.selectedCategory : styles.categoryName} key={index}>{elt.name}</h3>
        )
        )}
      </section>

    )



  )

}

