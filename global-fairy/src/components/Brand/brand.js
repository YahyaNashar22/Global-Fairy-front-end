import style from './Brand.module.css';
import shein from '../../../assets/images/shein.jpg';
import addidas from '../../../assets/images/addidas.jpg';
import handm from '../../../assets/images/h&m.jpg';
import hudaBeauty from '../../../assets/images/hudabeauty.jpg';
import mango from '../../../assets/images/mango.jpg';
import bershka from '../../../assets/images/bershka.jpg';
import robyRose from '../../../assets/images/robyRose.jpg';
import zara from '../../../assets/images/zara.jpg';
import nyx from '../../../assets/images/nyx.jpg';
import nike from '../../../assets/images/nike.jpg';
import nars from '../../../assets/images/nars.jpg';
const Brand = () => {
    return (
        <div>
        <h1>shop by brand </h1>
        <div className={style.imageContainer}>
            <div className={style.row}>
                <img src={shein} alt="Image 1"/>
                <img src={addidas} alt="Image 2g"/>
                <img src={handm} alt="Image 3"/>
                <img src={hudaBeauty} alt="Image 4"/>
            </div>
            <div className={style.row}>
                <img src={mango} alt="Image 5"/>
                <img src={bershka} alt="Image 6"/>
                <img src={robyRose} alt="Image 7"/>
            </div>
            <div className={style.row}>
                <img src={zara} alt="Image 8"/>
                <img src={nyx}alt="Image 9"/>
                <img src={nike} alt="Image 10"/>
                <img src={nars}alt="Image 11"/>
            </div>
        </div>
        </div>
    )
}
export default Brand;