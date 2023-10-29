import React from 'react'
import style from "./Numbers.module.css"

function Numbers() {
  return (
    <main className={style.numbersSection}>
      <h1 style={style.h1}>Numbers Behind Our Success</h1>
      <section className={style.imageSection}>
        <section className={style.imageSection1}>
          <figcaption className={style.imageA}>1000+<br /> High-Quality Products</figcaption>
          <figcaption className={style.imageB}> 200+<br /> Happy Customers</figcaption>
          <figcaption className={style.imageC}>15+ <br />International Brands</figcaption>
        </section>
        <section className={style.imageSection2}>
          <figcaption className={style.imageD} >Options For all Tastes</figcaption>
          <figcaption className={style.imageE}>7+ <br />Years in Business </figcaption>
        </section>
      </section>
    </main>
  )
}

export default Numbers