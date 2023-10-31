import React from 'react';
import CategoriesHeader from '../../components/Categories/CategoriesHeader'
import BrandHeader from '../../components/brandHeader/BrandHeader'
import SideBar from '../../components/SideBar/Sidebar'
import ProductNbs from '../../components/productNbs/ProductNbs'
import SortBy from '../../components/sortBy/SortBy'
import ProductCard from '../../components/productCard/ProductCard'
import Arrows from '../../components/arrows/Arrows'
import Filter from '../../assets/icons/filter.png'



import styles from "./Brand.module.css"
const Brand = () => {
    return (
        <div className={styles.brandPage}>
            <div className={styles.headerBrand}>
                <CategoriesHeader />
                <BrandHeader />
            </div>


            <div className={styles.mainBrand}>
                <div className={styles.addComp}>

                    
                    <div className="content">
                        <div className="filter">
                            <img src={Filter} alt="Filter Icon" />
                            <span>Filter</span>
                        </div>
                        <ProductNbs />
                    </div>

                    
                    <SortBy />
                </div>
                <div className={styles.mainProduct}>
                    <div className={styles.sideB}> 
                    <SideBar />
                    </div>
                    <div className={styles.products}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        {/* <ProductCard />
                        <ProductCard />
                        <ProductCard /> */}
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