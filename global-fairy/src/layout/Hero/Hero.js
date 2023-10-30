import React from 'react';
import style from './Hero.module.css';
import clothesAnimation from '../../assets/images/clothesAnimation.png';

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.mainContent}>
          <div className={style.content}>
            <h1 className={style.mainTitle}>Global Fairy</h1>
            <h2 className={style.subTitle}>FIND WHAT MATCHES YOUR STYLE</h2>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <a href="/clothes">
              <button className={style.callToAction}>Shop Now</button>
            </a>
          </div>
          <div className={style.categories}>
            <a href="/clothes" className={`${style.category} ${style.clothes}`}>clothes</a>
            <a href="/shoes" className={`${style.category} ${style.shoes}`}>shoes</a>
            <a href="/makeup" className={`${style.category} ${style.makeup}`}>makeup</a>
          </div>
        </div>
        <img className={style.image} src={clothesAnimation} alt="A Girl Wearing a Set of Clothes" />
      </div>
    </section>
  );
}

export default Hero;