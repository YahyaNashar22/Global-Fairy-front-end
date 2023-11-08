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
import { useNavigate } from 'react-router-dom';

const Brand = () => {
    const navigate = useNavigate();
    const sendBrand = async (brandName) => {
        try {
                navigate(`Products/Brand/${brandName}`)
            
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section className={style.brandSection}>
            <h1 className={style.heading}>Shop by Brand</h1>
            <div className={style.imageContainer}>
                <div className={style.row}>
                    <div className={style.twoBrands}>
                        <img src={shein} onClick={()=>sendBrand("Shein")}  className={style.brandImage} alt="Shein Logo" />
                        <img src={addidas} onClick={()=>sendBrand("Adidas")} className={style.brandImage} alt="Adidas Logo" />
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <img src={handm} onClick={()=>sendBrand("H&M")} className={style.brandImage} alt="H and M Logo" />
                            <img src={hudaBeauty} onClick={()=>sendBrand("HudaBeauty")} className={style.brandImage} alt="HudaBeauty Logo" />
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <img src={mango} onClick={()=>sendBrand("Mango")} className={`${style.deleteImage} ${style.brandImage} `} alt="Mango Logo" />
                            <img src={bershka} onClick={()=>sendBrand("Bershka")} className={style.brandImage} alt="Bershka Logo" />
                            <img src={robyRose} onClick={()=>sendBrand("RobyRose")} className={style.brandImage} alt="RobyRose Logo" />
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <img src={zara} onClick={()=>sendBrand("Zara")} className={style.brandImage} alt="Zara Logo" />
                            <img src={nyx} onClick={()=>sendBrand("NYX")} className={style.brandImage} alt="Nyx Logo" />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <img src={nike} onClick={()=>sendBrand("Nike")} className={style.brandImage} alt="Nike logo" />
                            <img src={nars} onClick={()=>sendBrand("Nars")} className={style.brandImage} alt="Nars Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;