import React from 'react'
import style from "./Similiar.module.css"
import productImg from "../../assets/images/product.png"

export default function SimiliarProduct() {
  return (
    <div className={style.card}>
      <div className={style.imageSec}>
        <img src={productImg} alt="Product" />
      </div>
      <div className={style.details}>
        <span className={style.title}>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</span>
        <span className={style.priceCard}>$78.5</span>
      </div>
    </div>
  )
}
