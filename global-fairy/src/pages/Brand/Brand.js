import React from 'react';
import CategoriesHeader from '../../components/Categories/CategoriesHeader'
import BrandHeader from '../../components/brandHeader/BrandHeader'
import SideBar from '../../components/SideBar/Sidebar'
import ProductNbs from '../../components/productNbs/ProductNbs'
import SortBy from '../../components/sortBy/SortBy'
import ProductCard from '../../components/productCard/ProductCard'


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
                    <ProductNbs />
                    <SortBy />
                </div>
                <div className={styles.mainProduct}>
                    <SideBar />
                    <div className={styles.products}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Brand;