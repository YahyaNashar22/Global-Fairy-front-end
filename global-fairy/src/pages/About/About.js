import style from './About.module.css';
import about from '../../assets/images/about.png';
import product from '../../assets/images/product (3) 1.png';
import delivery from '../../assets/images/icon-delivery.png';
import shield from '../../assets/images/shield-tick.png';
import customer from '../../assets/images/Customer service .png';


const About = () => {
    return (
        <div className={style.aboutContainer}>
            <div className={style.container}>
                <div className={style.text}>
                    <h2 className={style.aboutTitle}>OUR STORY</h2>
                    <p className={style.phrase1}>
                    Launched over 7 years ago in Lebanon, Exclusive has swiftly grown into a leading multi-vendor marketplace. Focused on women aged 18 and above, we offer a diverse range of fashion and makeup brands for a convenient shopping experience. Our goal is to save customers time and effort while providing extensive product options.                    </p>
                    <p>
                    Exclusive strives to be a trusted online shopping destination, fostering brand visibility and sales for vendors while cultivating a loyal customer base. With 7+ years of expertise, we continue to set new standards in Lebanon's bustling e-commerce landscape.                    </p>
                </div>
                <div className={style.image}>
                    <img className={style.img1} src={about} alt="About Us" />
                </div>
            </div>
            <div className={style.whyus}>
                <h2 className={style.aboutTitle}>WHY US</h2>
                <div className={style.allIcon}>
                    <div className={style.icon}>
                        <div className={`${style.frame} ${style.grayFrame}`}>
                            <div className={style.blackFrame}>
                                <img src={product} alt="product" />
                            </div>
                        </div>
                        <div>
                            <div className={style.phrase}>
                                <p className={style.phrase2} >HIGH QUALITY</p>
                                <p>Hight quality original brands </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <div className={`${style.frame} ${style.grayFrame}`}>
                            <div className={style.blackFrame}>
                                <img className={style.img2} src={customer} alt="Customer service" />
                            </div>
                        </div>
                        <div>
                            <div className={style.phrase}>
                                <p className={style.phrase2} >CUSTOMER SERVICE</p>
                                <p>Friendly customer suppor</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <div className={style.frame + ' ' + style.grayFrame}>
                            <div className={style.blackFrame}>
                                <img className={style.img2} src={shield} alt="shield-tick" />
                            </div>
                        </div>
                        <div>
                            <div className={style.phrase}>
                                <p  className={style.phrase2} >MONEY BACK GUARANTEE</p>
                                <p>We reurn money within 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <div className={style.frame + ' ' + style.grayFrame}>
                            <div className={style.blackFrame}>
                                <img className={style.img2} src={delivery} alt="delivery" />
                            </div>
                        </div>
                        <div className={style.phrase}>
                            <p className={style.phrase2} >FAST DELIVERY</p>
                            <p>Fast delivery all over Lebanon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About;