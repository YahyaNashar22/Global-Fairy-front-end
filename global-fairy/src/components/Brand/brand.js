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
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Brand = () => {
    const navigate = useNavigate()
    const sendBrand = async (brandName) => {
        console.log("image clicked")
        try {
            const requestedData = { "name": `${brandName}` }
            const response = await axios.get(`http://localhost:5000/brand/readByName/${brandName}`);
            const brandData = response.data
            if (brandData) {
                navigate(`Products/Brand/${brandData.name}/${brandData.categories[0].name}`)
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section className={style.brandSection}>
            <h1 className={style.heading}>Shop by Brand </h1>
            <div className={style.imageContainer}>
                <div className={style.row}>
                    <div className={style.twoBrands}>
                        {/* <Link to="Products/Brand/Shein"  style={{'textDecoration':'none', "color":'inherit'}} className={style.brandImageLink} > */}
                        <img src={shein} onClick={()=>sendBrand("Shein")}  className={style.brandImage} alt="Shein Logo" />
                        {/* </Link> */}
                        {/* <Link to="Products/Brand/Adidas" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                            <img src={addidas} onClick={()=>sendBrand("Adidas")} className={style.brandImage} alt="Adidas Logo" />
                        {/* </Link> */}
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/HM" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={handm} onClick={()=>sendBrand("H&M")} className={style.brandImage} alt="H and M Logo" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/HudaBeauty" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={hudaBeauty} onClick={()=>sendBrand("HudaBeauty")} className={style.brandImage} alt="HudaBeauty Logo" />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/Mango" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={`${style.brandImageLink} ${style.deleteImage}`}> */}
                                <img src={mango} onClick={()=>sendBrand("Mango")} className={`${style.deleteImage} ${style.brandImage} `} alt="Mango Logo" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/Bershka" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={bershka} onClick={()=>sendBrand("Bershka")} className={style.brandImage} alt="Bershka Logo" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/RobyRose" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={robyRose} onClick={()=>sendBrand("RobyRose")} className={style.brandImage} alt="RobyRose Logo" />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/Zara" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={zara} onClick={()=>sendBrand("Zara")} className={style.brandImage} alt="Zara Logo" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/Nyx" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={nyx} onClick={()=>sendBrand("NYX")} className={style.brandImage} alt="Nyx Logo" />
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.twoBrands}>
                            {/* <Link to="Products/Brand/Nike" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={nike} onClick={()=>sendBrand("Nike")} className={style.brandImage} alt="Nike logo" />
                            {/* </Link> */}
                            {/* <Link to="Products/Brand/Nars" style={{ 'textDecoration': 'none', "color": 'inherit' }} className={style.brandImageLink}> */}
                                <img src={nars} onClick={()=>sendBrand("Nars")} className={style.brandImage} alt="Nars Logo" />
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;