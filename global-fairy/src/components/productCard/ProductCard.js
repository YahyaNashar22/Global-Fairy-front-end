import React, { useState } from 'react'
import style from "./productCard.module.css"
import productImg from "../../assets/images/product.png"
import Sold from '../soldOut/Sold'
export default function ProductCard() {
  const [isSold,setIsSold]=useState(true)
  const mainStyles=`${style.card} ${isSold ? style.blur:''}`
  return (
    <main className={mainStyles}>
        <section className={style.imageSec}><img src={productImg} alt="Product"/></section>
        <section className={style.details}>
          <span>
          Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</span>
          <span className={style.priceCard}>$78.5</span>
          {
            isSold?  <span className={style.soldPan}><Sold/></span> :''
          }
   </section>
    </main> 
  )
}
