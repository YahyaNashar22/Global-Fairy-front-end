import React from 'react'
import style from "./Similiar.module.css"
import productImg from "../../assets/images/product.png"
import axios from 'axios'

export default function SimiliarProduct({productDetails}) {
  const product=productDetails
  console.log(product.name)
  return (
    <div className={style.card}>
      <div className={style.imageSec}>
        <img src={`http://localhost:5000/${productDetails.images[0]}`} alt="Product" />

      </div>
      <div className={style.details}>
        <span className={style.title}>{productDetails.name}</span>
        <span className={style.priceCard}>${productDetails.price}</span>
      </div>
    </div>
  )
}
