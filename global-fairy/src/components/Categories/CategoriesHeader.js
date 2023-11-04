import React from 'react'
import styles from "./CategoriesHeader.module.css"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function CategoriesHeader(props) {
  const {categories} = props
const {nameType,brandCategory}=useParams()
const navigate=useNavigate()
const switchTo=(categorySwitched)=>{
  navigate(`/Products/Brand/${nameType}/${categorySwitched}`)

}

console.log("this is the type from the componennt :"+brandCategory)
  return (
    <section className={styles.CategoriesHeader}>
      {categories.map((elt,index) => (
        <h3 onClick={()=>switchTo(elt.name)}  className={ elt.name === brandCategory ?  styles.selectedCategory: styles.categoryName } key={index}>{elt.name}</h3>
      )
      )
      }
    </section>
  )
}