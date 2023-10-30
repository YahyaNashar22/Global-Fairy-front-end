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

const Brand = () => {
    return (
        <section className={style.brandSection}>
            <h1 className={style.heading}>Shop by Brand </h1>
            <div className={style.imageContainer}>
                <div className={style.row}>
                    <div className={style.twoBrands}>
                        <img src={shein} alt="Image 1"/>
                        <img src={addidas} alt="Image 2g"/>
                    </div>
                <div className={style.row}>
                    <div className={style.twoBrands}>
                        <img src={handm} alt="Image 3"/>
                        <img src={hudaBeauty} alt="Image 4"/>
                    </div>
                </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                        <img src={mango} className={style.deleteImage} alt="Image 5"/>
                        <img src={bershka} alt="Image 6"/>
                        <img src={robyRose} alt="Image 7"/>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <img src={zara} alt="Image 8"/>
                            <img src={nyx}alt="Image 9"/>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            <img src={nike} alt="Image 10"/>
                            <img src={nars}alt="Image 11"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;