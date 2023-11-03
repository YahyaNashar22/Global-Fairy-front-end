import React, { useEffect, useState } from 'react';
import CategoriesHeader from '../../components/Categories/CategoriesHeader'
import BrandHeader from '../../components/brandHeader/BrandHeader'
import SideBar from '../../components/SideBar/Sidebar'
import ProductNbs from '../../components/productNbs/ProductNbs'
import SortBy from '../../components/sortBy/SortBy'
import ProductCard from '../../components/productCard/ProductCard'
import Arrows from '../../components/arrows/Arrows'
import Filter from '../../assets/icons/filter.png'
import { useParams } from 'react-router-dom';
import axios from "axios"

import styles from "./Brand.module.css"
const Brand = () => {
    const {type,name}=useParams()
    const [brand,setBrand]=useState(name)

const [categories,setCategories]=useState(brand.categories)   
const[shownCategory,setShownCategory]=useState(brand.categories[0].name) 
const[products,setProducts]=useState([])

//GET THE BRAND
const getBrand=()=>{
let requestedData={"name":name}
axios.get('http://localhost:5000/brand/readByName',requestedData,{
    headers:{
"Content-Type":'application/json'
    },
})
.then((response)=>{
setBrand(response.data)
})
.catch((error)=>{
    console.log(error);
})
}

// GET THE CATEGORY
const getProducts=()=>{
    let requestedData={"brand":brand.id,"category":shownCategory.id}
    axios.get('http://localhost:5000/product/category-brand',requestedData,{
        headers:{
    "Content-Type":'application/json'
        },
    })
    .then((response)=>{
    setBrand(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
}
useEffect(()=>{
    getBrand();
},[])

    return (
        <div className={styles.brandPage}>
            {/*  */}
            <div className={styles.headerBrand}>
                <CategoriesHeader categories={categories}/>
            {type==="Brand"?<BrandHeader name={name}/>:null } 
            </div>
            {/*  */}
            <div className={styles.mainBrand}>
                {/*  */}
                <div className={styles.addComp}>
                <span className={styles.addedComp}><ProductNbs /></span>
                   <span className={styles.addedComp}><SortBy /></span> 
                    </div>
{/* <<<<<<< HEAD */}

                    <div className={styles.content}>
                        <div className={styles.firstBox}>
                            <div className={styles.filterBtn}>
                                <img src={Filter} className={styles.filterIcon} alt="Filter Icon" />
                                {/* <span>Filter</span> */}
                            {/* </div>
                            <ProductNbs />
                        </div> */}
                    </div>
                    {/* <SortBy />   */}
{/* ======= */}
                   
{/* >>>>>>> pagesLinks */}
                </div>
                {/*  */}
                <div className={styles.mainProduct}>
                    <div className={styles.sideB}> 
                        <SideBar /> 
                        {/* <nav role="navigation"  > *style={{'display':'none'}}
                                    <div className={styles.menuToggle} >
                                        <input type="checkbox" />
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                        <ul className={styles.menu}>
                                            <SideBar />
                                        </ul>
                                    </div>
                                </nav> */}
                    </div>
                    <div className={styles.products}>
                        <ProductCard />
                        <ProductCard />

                        <ProductCard />   
                        <ProductCard />

                    </div>
                </div>
            </div>

{/* <div className={styles.arrow}>
    <Arrows/>

</div> */}
        </div>
        </div>
    )
}


export default Brand;