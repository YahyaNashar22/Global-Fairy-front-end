import React from 'react';
import { useState,useEffect } from 'react';
import { useSharedData } from '../../context/DataContext';
import style from './Hero.module.css';
import clothesAnimation from '../../assets/images/clothesAnimation.png';
import AnimationC from '../../assets/images/suits.png'
import AnimationS from '../../assets/images/AnimationS2.png'
import AnimationM from '../../assets/images/AnimationM2.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const { isNavOpen } = useSharedData();
const navigate=useNavigate()
  const images = [AnimationC, AnimationM, AnimationS];
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateTo=()=>{
    console.log("image clickedddd")
navigate("/Products/Categories/Category/Clothes")
  }
  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 3000)
      
      return () => clearInterval(intervalId);
  }, [currentIndex])
  return (
    <section className={`${style.hero} ${isNavOpen ? style.SectionOpacity : ''}`}>
      <div className={style.container}>
        <div className={style.mainContent}>
          <div className={style.content}>
            <h1 className={style.mainTitle}>Global Fairy</h1>
            <span className={style.subTitle}>FIND WHAT MATCHES YOUR STYLE</span>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link to="Products/Categories/Category/Clothes" className={style.links}>
              <button onClick={()=>navigateTo} className={style.callToAction}>Shop Now</button>
            </Link>
          </div>
          <div className={style.categories}>
            <span className={`${style.category} ${style.clothes}`}>clothes</span>
            <span className={`${style.category} ${style.shoes}`}>shoes</span>
            <span className={`${style.category} ${style.makeup}`}>makeup</span>
          </div>
        </div>
        <div className={style.imgHolder} >
          <img className={style.image} src={images[currentIndex]} alt="A Girl Wearing a Set of Clothes" />
        </div>
      </div>
    </section>
  );
}

export default Hero;