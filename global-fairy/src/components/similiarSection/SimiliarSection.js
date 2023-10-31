import React from 'react'
import style from "./SimiliarSection.module.css"
import SimiliarProduct from '../similiarProducts/SimiliarProduct'

export default function SimiliarSection() {
  return (
    <section className={style.main}>
      <h1 className={style.title}>You might also like</h1>
      <div className={style.productsHolder}>
        <SimiliarProduct></SimiliarProduct>
        <SimiliarProduct></SimiliarProduct>
        <SimiliarProduct></SimiliarProduct>
        <SimiliarProduct></SimiliarProduct>
      </div>
    </section>
  )
}
