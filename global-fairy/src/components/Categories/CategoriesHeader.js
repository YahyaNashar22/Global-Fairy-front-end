import React from 'react'
import styles from "./CategoriesHeader.module.css"

export default function CategoriesHeader({categories,changeCategory,shown}) {

const categoriesAll=categories
const shownC=shown
console.log("headerrr catego sh"+shownC)
const change=(index)=>{
changeCategory(index);
}

  return (
    <section className={styles.CategoriesHeader}>
      {categoriesAll.map((elt,index) => (
        <h3 onClick={()=>change(index)}  className={ elt.name === shownC.name ?  styles.selectedCategory: styles.categoryName  } key={index}>{elt.name}</h3>
        )
      )
      }
    </section>
  )

}