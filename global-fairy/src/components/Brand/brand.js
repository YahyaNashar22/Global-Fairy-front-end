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
    // const scrollToTop=()=>{
    //     setTimeout(()=>{
    //         window.scrollTo(0,0)
    //     },1)
       
    // }
    return (
        <section className={style.brandSection}>
            <h1 className={style.heading}>Shop by Brand </h1>
            <div className={style.imageContainer}>
                <div className={style.row}>
                    <div className={style.twoBrands}>
                        <Link to="Products/Brand/Shein"  style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink} >
                        <img src={shein} className={style.brandImage} alt="Shein Logo" />
                        </Link>
                        <Link to="Products/Brand/Adidas"  style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                        <img src={addidas} className={style.brandImage} alt="Adidas Logo" />
                        </Link>
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <Link to="Products/Brand/HM"  style={{'textDecoration':'none', "color":'inherit'}}className={style.brandImageLink}>
                            <img src={handm}   className={style.brandImage} alt="H and M Logo" />
                            </Link>
                            <Link to="Products/Brand/HudaBeauty"  style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                            <img src={hudaBeauty} className={style.brandImage} alt="HudaBeauty Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <Link to="Products/Brand/Mango" style={{'textDecoration':'none', "color":'inherit'}} className={`${style.brandImageLink} ${style.deleteImage}`}>
                            <img src={mango} className={`${style.deleteImage} ${style.brandImage} `} alt="Mango Logo" />
                            </Link>
                            <Link to="Products/Brand/Bershka"  style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                            <img src={bershka} className={style.brandImage} alt="Bershka Logo" />
                            </Link>
                            <Link to="Products/Brand/RobyRose"  style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                            <img src={robyRose} className={style.brandImage} alt="RobyRose Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <Link to="Products/Brand/Zara"    style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                            <img src={zara} className={style.brandImage} alt="Zara Logo" />
                            </Link>
                            <Link to="Products/Brand/Nyx"     style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                            <img src={nyx} className={style.brandImage} alt="Nyx Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <Link to="Products/Brand/Nike"    style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                            <img src={nike} className={style.brandImage} alt="Nike logo" />
                            </Link>
                            <Link to="Products/Brand/Nars" style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink}>
                            <img src={nars} className={style.brandImage} alt="Nars Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;