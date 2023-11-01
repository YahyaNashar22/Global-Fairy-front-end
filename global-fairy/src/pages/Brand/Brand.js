import React, { useState } from 'react';
import CategoriesHeader from '../../components/Categories/CategoriesHeader'
import BrandHeader from '../../components/brandHeader/BrandHeader'
import SideBar from '../../components/SideBar/Sidebar'
import ProductNbs from '../../components/productNbs/ProductNbs'
import SortBy from '../../components/sortBy/SortBy'
import ProductCard from '../../components/productCard/ProductCard'
import Arrows from '../../components/arrows/Arrows'
import { useParams } from 'react-router-dom';


import styles from "./Brand.module.css"
const Brand = () => {
    const {type,name}=useParams()
const [categories,setCategories]=useState(["Clothes","Shoes","Makeup"])    
    return (
        <div className={styles.brandPage}>
            <div className={styles.headerBrand}>
                <CategoriesHeader categories={categories}/>
            {type==="Brand"?<BrandHeader name={name}/>:null } 
            </div>


            <div className={styles.mainBrand}>
                <div className={styles.addComp}>
                    <span className={styles.addedComp}><ProductNbs /></span>
                   <span className={styles.addedComp}><SortBy /></span> 
                </div>
                <div className={styles.mainProduct}>
                    <div className={styles.sideB}> 
                    <SideBar />
                    </div>
                    <div className={styles.products}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />   
                        <ProductCard />
                        <ProductCard />                    
                      
                    </div>

                </div>
            </div>
<div className={styles.arrow}>
    <Arrows/>

</div>
        </div>
    )
}

export default Brand;