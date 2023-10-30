import React from 'react'
import style from "./SimiliarSection.module.css"
import SimiliarProduct from '../similiarProducts/SimiliarProduct'

export default function SimiliarSection() {
  return (
    <main className={style.main}>
      <h1 style={style.h1}>You might also like</h1>
      <section className={style.productsHolder}>
        <SimiliarProduct></SimiliarProduct>
        <SimiliarProduct></SimiliarProduct>
        <SimiliarProduct></SimiliarProduct>
        <SimiliarProduct></SimiliarProduct>
        <SimiliarProduct></SimiliarProduct>
      </section>
    </main>
  )
}
