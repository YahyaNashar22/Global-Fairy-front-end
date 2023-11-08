import React from 'react'
import style from "./Numbers.module.css"

function Numbers() {
  return (
    <section className={style.numbersSection}>
      <h1 className={style.title}>Numbers Behind Our Success</h1>
      <div className={style.imageSection}>
        <figure className={style.imageSection1}>
          <figcaption className={style.imageA}> <div className={style.opacityB}></div> <span className={style.numbers} >1000+ High-Quality Products </span></figcaption>
          <figcaption className={style.imageB}> <div className={style.opacityB}></div> <span className={style.numbers}> 200+ Happy Customers</span> </figcaption>
          <figcaption className={style.imageC}> <div className={style.opacityB}></div> <span className={style.numbers}> 15+ International Brands</span> </figcaption>
        </figure>
        <figure className={style.imageSection2}>
          <figcaption className={style.imageD} > <div className={style.opacityB}></div><span className={style.numbers}> Options For all Tastes</span></figcaption>
          <figcaption className={style.imageE}> <div className={style.opacityB}></div> <span className={style.numbers}> 7+ Years in Business</span>  </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Numbers