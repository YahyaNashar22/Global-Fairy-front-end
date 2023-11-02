import React, { useState } from 'react';
import CategoriesHeader from '../../components/Categories/CategoriesHeader'
import BrandHeader from '../../components/brandHeader/BrandHeader'
import SideBar from '../../components/SideBar/Sidebar'
import ProductNbs from '../../components/productNbs/ProductNbs'
import SortBy from '../../components/sortBy/SortBy'
import ProductCard from '../../components/productCard/ProductCard'
<<<<<<< HEAD
import Arrows from '../../components/arrows/Arrows'
import Filter from '../../assets/icons/filter.png'

=======
import { useParams } from 'react-router-dom';
>>>>>>> pagesLinks


import styles from "./Brand.module.css"
const Brand = () => {
    const {type,name}=useParams()
const [categories,setCategories]=useState(["Clothes","Shoes","Makeup"])    
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
<<<<<<< HEAD

                    <div className={styles.content}>
                        <div className={styles.firstBox}>
                            <div className={styles.filterBtn}>
                                <img src={Filter} className={styles.filterIcon} alt="Filter Icon" />
                                {/* <span>Filter</span> */}
                            </div>
                            <ProductNbs />
                        </div>
                    </div>
                    <SortBy />  
=======
                    <span className={styles.addedComp}><ProductNbs /></span>
                   <span className={styles.addedComp}><SortBy /></span> 
>>>>>>> pagesLinks
                </div>
                {/*  */}
                <div className={styles.mainProduct}>
                    <div className={styles.sideB}> 
                        {/* <SideBar /> */}
                        <nav role="navigation">
                                    <div className={styles.menuToggle} >
                                        <input type="checkbox" />
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                        <ul className={styles.menu}>
                                            <SideBar />
                                        </ul>
                                    </div>
                                </nav>
                    </div>
                    <div className={styles.products}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
<<<<<<< HEAD
=======
                        <ProductCard />   
                        <ProductCard />
                        <ProductCard />                    
>>>>>>> pagesLinks
                        <ProductCard />
                        <ProductCard />   
                        <ProductCard />
<<<<<<< HEAD
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
=======
                        <ProductCard />  
>>>>>>> pagesLinks
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            {/*  */}
            <div className={styles.arrow}>
                <Arrows/>
            </div>
=======
{/* <div className={styles.arrow}>
    <Arrows/>

</div> */}
>>>>>>> pagesLinks
        </div>
    )
}

export default Brand;