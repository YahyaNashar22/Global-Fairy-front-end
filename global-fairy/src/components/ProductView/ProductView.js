import React, { useEffect } from 'react';
import style from './ProductView.module.css';
import mainImage from '../../assets/images/main.jpeg';
import imageOne from '../../assets/images/imageOne.png';
import imageTwo from '../../assets/images/imageTwo.png';
import Colors from '../../components/Colors/Colors'

const ProductView = () => {
    useEffect(() => {
        const decreaseButton = document.querySelector(".decrease");
        const increaseButton = document.querySelector(".increase");
        const countDisplay = document.querySelector(".count");

        if (decreaseButton && increaseButton && countDisplay) {
            let count = 1;

            decreaseButton.addEventListener("click", () => {
                if (count > 1) {
                count--;
                updateCount();
                }
            });

            increaseButton.addEventListener("click", () => {
            if (count < 10) {
                count++;
                updateCount();
            }
            });

            function updateCount() {
                countDisplay.textContent = count;
            }

            return () => {
                decreaseButton.removeEventListener("click", updateCount);
                increaseButton.removeEventListener("click", updateCount);
            };
        }
    }, []);

    return (
        <section className={style.productView}>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <div className={style.threeImages}>
                        <img src={imageTwo} alt="Product Image" />
                        <img src={imageOne} alt="Product Image" />
                        <img src={imageTwo} alt="Product Image" />
                    </div>
                    <div className={style.mainImage}>
                        <img src={mainImage} alt="Main Product Image" />
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.content}>
                        <h1 className={style.mainTitle}>One Life Graphic T-shirt, ZARA</h1>
                        <div className={style.price}>$26</div>
                        <div className={style.description}>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</div>
                    </div>
                    <Colors />
                    <div className={style.size}>
                        <p className={style.title}>Choose Size</p>
                        <div className={style.sizeButtons}>
                            <button className={style.s}>Small</button>
                            <button className={style.m}>Meduim</button>
                            <button className={style.l}>Large</button>
                            <button className={style.xl}>X-Large</button>
                        </div>
                    </div>
                    <div className={style.purshaseButtons}>
                        <button className={style.counter}>
                            <span className={style.decrease}>-</span>
                            <span className={style.count}>1</span>
                            <span className={style.increase}>+</span>
                        </button>
                        <button className={style.addToCard}>
                            Add to Cart
                        </button>
                    </div>
                    <button className={style.soldout} style={{ display: 'none' }}>Sold Out</button>
                </div>
            </div>
        </section>
    );
}

export default ProductView;
