import React from 'react'
import style from "./Similiar.module.css"
import productImg from "../../assets/images/product.png"
export default function SimiliarProduct() {
  return (
    <main className={style.card}>
      <section className={style.imageSec}><img src={productImg} alt="Product" /></section>
      <section className={style.details}>
        <span className={style.title}>
          Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</span>
        <span className={style.priceCard}>$78.5</span>
      </section>
    </main>
  
  )
}
