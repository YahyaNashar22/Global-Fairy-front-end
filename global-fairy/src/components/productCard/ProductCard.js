import React, { useState } from 'react'
import style from "./productCard.module.css"
import productImg from "../../assets/images/product.png"
import Sold from '../soldOut/Sold'
export default function ProductCard() {
  const [isSold, setIsSold] = useState(true)
  const blurClass = isSold? style.blur :null;
  return (
    <main className={style.card}>
      <section className={`${style.imageSec} ${blurClass}`}><img src={productImg} alt="Product" /></section>
      <section className={style.details}>
        <span className={`${blurClass} ${style.title}`}>
          Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</span>
        <span className={`${style.priceCard} ${blurClass}`}>$78.5</span>
        {
          isSold ? <span className={style.soldPan}><Sold /></span> : null
        }
      </section>
    </main>
  )
}
