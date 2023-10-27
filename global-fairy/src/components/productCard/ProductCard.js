import React from 'react'
import style from "./productCard.module.css"
import img from "../../assets/images/shirt.jpg"

export default function ProductCard() {
  return (
    <main className={style.card}>
        <section className={style.imageSec}><img src={img} alt="Product Image"/></section>
        <section className={style.details}>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</section>

    </main> 
  )
}
