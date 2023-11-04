import React from 'react'
import style from "./productCard.module.css"
// import productImg from "../../assets/images/product.png"
import Sold from '../soldOut/Sold'
export default function ProductCard(props) {
  // const [isSold, setIsSold] = useState()
  const isSold=props.productData.details.every(detail=>detail.stock===0);

  const blurClass = isSold? style.blur :null;
  return (
    <div className={style.card}>
      <div className={`${style.imageSec} ${blurClass}`}><img src={`http://localhost:5000/${props.productData.images[0]}`} alt="Product" /></div>
      <div className={style.details}>
        <span className={`${blurClass} ${style.title}`}>
          {/* Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse */}
          {props.productData.name}
          </span>
        <span className={`${style.priceCard} ${blurClass}`}>${props.productData.price}</span>
        {
          isSold ? <span className={style.soldPan}><Sold /></span> : null
        }
      </div>
    </div>
  )
}
