import style from './brand.module.css';
import shein from '../../assets/images/shein.jpg';
import addidas from '../../assets/images/addidas.jpg';
import handm from '../../assets/images/h&m.jpg';
import hudaBeauty from '../../assets/images/hudabeauty.jpg';
import mango from '../../assets/images/mango.jpg';
import bershka from '../../assets/images/bershka.jpg';
import robyRose from '../../assets/images/robyRose.jpg';
import zara from '../../assets/images/zara.jpg';
import nyx from '../../assets/images/nyx.jpg';
import nike from '../../assets/images/nike.jpg';
import nars from '../../assets/images/nars.jpg';
import { Link } from "react-router-dom"
const Brand = () => {
    return (
        <section className={style.brandSection}>
            <h1 className={style.heading}>Shop by Brand </h1>
            <div className={style.imageContainer}>
                <div className={style.row}>
                    <div className={style.twoBrands}>
                        {/* <Link to="Products/Brand/Shein"> */}
                        <img src={shein} className={style.brandImage} alt="Image 1" />
                        {/* </Link> */}
                        {/* <Link to="Products/Brand/Adidas"> */}
                        <img src={addidas} className={style.brandImage} alt="Image 2g" />
                        {/* </Link> */}
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/HM"> */}
                            <img src={handm} className={style.brandImage} alt="Image 3" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/HudaBeauty"> */}
                            <img src={hudaBeauty} className={style.brandImage} alt="Image 4" />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/Mango"> */}
                            <img src={mango} className={`${style.deleteImage} ${style.brandImage} `} alt="Image 5" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/Bershka"> */}
                            <img src={bershka} className={style.brandImage} alt="Image 6" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/RobyRose"> */}
                            <img src={robyRose} className={style.brandImage} alt="Image 7" />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/Zara"> */}
                            <img src={zara} className={style.brandImage} alt="Image 8" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/Nyx"> */}
                            <img src={nyx} className={style.brandImage} alt="Image 9" />
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/Nike"> */}
                            <img src={nike} className={style.brandImage} alt="Image 10" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/Nars"> */}
                            <img src={nars} className={style.brandImage} alt="Image 11" />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;