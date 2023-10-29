import React from 'react'
import style from "./Nb.module.css"
import shoes from "../../assets/images/shoes.webp"
import fashion1 from "../../assets/images/hp.jpg"
import makeup3 from "../../assets/images/makeup3.jpg"
import fashion7 from "../../assets/images/fashion7.jpg"
import fashion4 from "../../assets/images/fashion4.jpg"

function Nb() {
  return (
    <main className={style.numbersSection}>
      <h1 style={style.h1}>Numbers Behind Our Success</h1>
      <section className={style.imageSection}>
        <section className={style.imageSection1}>
          {/* <figcaption className={style.imageA}>1000+<br /> High-Quality Products</figcaption>
          <figcaption className={style.imageB}> 200+<br /> Happy Customers</figcaption>
          <figcaption className={style.imageC}>15+ <br />International Brands</figcaption> */}
          
        <figcaption className={style.imageA}> <img  src={shoes} alt="showcasea hight quality product" ></img> </figcaption>
        <figcaption className={style.imageB}> <img src={fashion1}  alt="showcas a happy customer" ></img>  </figcaption>
        <figcaption  className={style.imageC}><img src={makeup3} alt="showcae some products of some brands" ></img> </figcaption> 
        </section>
        <section className={style.imageSection2}>
          {/* <figcaption className={style.imageD} >Options For all Tastes</figcaption>
          <figcaption className={style.imageE}>7+ <br />Years in Business </figcaption> */}
          <figcaption><img src={fashion7} className={style.imageD} alt="showcse different colors of a product" ></img> </figcaption> 
           <figcaption><img src={fashion1} className={style.imageE} alt="showase a fashionable outfit" ></img></figcaption>
        </section>
      </section>
    </main>
  )
}

export default Nb