import React from 'react'
import style from "./Numbers.module.css"
import shoes from "../../assets/images/shoes.webp"
import fashion1 from "../../assets/images/fashion1.jpg"
import makeup3 from "../../assets/images/makeup3.jpg"
import fashion7 from "../../assets/images/fashion7.jpg"
import fashion4 from "../../assets/images/fashion4.jpg"

function Numbers() {
  return (
    <container className={style.numbersSection}>
      <h1 style={style.h1}>Numbers Behind Our Success</h1>
      <section className={style.imageSection}>
      <section className={style.imageSection1}>
        <figure> <img className={style.imageA} src={shoes} alt="showcasea hight quality product" ></img> </figure>
        <figure> <img src={fashion1} className={style.imageB} alt="showcas a happy customer" ></img>  </figure>
        <figure><img src={makeup3} className={style.imageC} alt="showcae some products of some brands" ></img> </figure>
      </section>
      <section className={style.imageSection2}>
        <figure><img src={fashion7} className={style.imageD} alt="showcse different colors of a product" ></img> </figure>
        <figure><img src={fashion4} className={style.imageE} alt="showase a fashionable outfit" ></img></figure>
      </section>
      </section>
    </container>
  )
}

export default Numbers