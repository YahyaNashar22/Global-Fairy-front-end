import React, { useEffect, useState } from 'react';
import CategoriesHeader from '../../components/Categories/CategoriesHeader'
import BrandHeader from '../../components/brandHeader/BrandHeader'
import SideBar from '../../components/SideBar/Sidebar'
import ProductNbs from '../../components/productNbs/ProductNbs'
import SortBy from '../../components/sortBy/SortBy'
import ProductCard from '../../components/productCard/ProductCard'
// import Arrows from '../../components/arrows/Arrows'
import Filter from '../../assets/icons/filter.png'
import { useParams } from 'react-router-dom';
import axios from "axios"
import styles from "./Brand.module.css"


const Brand = () => {
    const { type, nameType, brandCategory } = useParams()
    const [brand, setBrand] = useState()
    const [categories, setCategories] = useState()
    const [shownCategory, setShownCategory] = useState()
    const [products, setProducts] = useState([])
    const [sortValue, setSortValue] = useState('low')

    const handleChange = (sortValue) => {
        setSortValue(sortValue)
    }

    const sortProductsByPrice = () => {

        if (sortValue === 'low') {
            const sortedProducts=[...products].sort((a, b) => a.price - b.price)
            setProducts(sortedProducts)

        }
        else if (sortValue === 'high') {
            const sortedProducts=[...products].sort((a, b) => b.price - a.price)
            setProducts(sortedProducts)
            // sortedProducts = productsData.sort((a, b) => b.price - a.price)

        }
    }

    console.log('sortValue:' + sortValue)

    // GET THE BRAND
    const getBrand = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/brand/readByName/${nameType}`);
            const brandData = response.data
            if (brandData) {
                setBrand(brandData)
                setCategories(brandData.categories)
                // console.log("brand data")
                console.log(brand)
            }

            if (!brandData) {
                console.log("BRAND NOT FOUND")
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }


    // GET CATEGORY 
    const getCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/category/readByName/${brandCategory}`);
            if (response) {
                console.log("there is response")
                const categoryData = response.data
                console.log(categoryData)
                if (categoryData) {

                    setShownCategory(categoryData)
                    if (shownCategory) {
                        console.log("shown category data")
                        console.log(shownCategory)
                        console.log("category id")
                        console.log(shownCategory._id)
                    }

                }

            }
            else {
                console.log("Category NOT FOUND")
            }
            //             if(categoryData){
            //                 setShownCategory(categoryData)
            //   // setShownCategory(categoryData)
            //             // setCategories(brand.categories)
            //             console.log("shown category data")
            //             console.log(shownCategory)
            //             console.log("category id")
            //             console.log(shownCategory._id)
            //             }
            //             else {
            //                 console.log("Category NOT FOUND")
            //             }
        }
        catch (error) {
            console.log(error.message);
        }
    }

    // // GET Products
    const getProducts = async () => {
        // let requestedData = { "brand": brand._id, "category": shownCategory._id }
        await axios.get(`http://localhost:5000/product/category-brand`, {
            params: { brand: brand._id, category: shownCategory._id },
            //6536affdad2130a5607f3f34
            // params: { brand: "6536affdad2130a5607f3f34", category: "653631c4b4eaa3edaf4a9462" },
            headers: {
                "Content-Type": 'application/json'
            },
        })
            .then((response) => {
                console.log("products response")
                console.log(brand._id)
                const productsData = response.data
                const sortedProducts=productsData.sort((a, b) => a.price - b.price)
                // let sortedProducts=[]
                // if(sortValue==='low'){
                //      sortedProducts = productsData.sort((a, b) => a.price - b.price)

                // }
                // else if(sortValue==='high'){
                //     sortedProducts = productsData.sort((a, b) => b.price - a.price)

                // }
                // const sortedProducts = productsData.sort((a, b) => a.price - b.price)
                setProducts(sortedProducts)
                console.log(products)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }



    useEffect(() => {
        const executeInOrder = async () => {
            await getBrand();
            await getCategory();
            if (brand && shownCategory) {
                getProducts();

            }
        };
        executeInOrder()
    }, [nameType,brandCategory])

useEffect(()=>{
    sortProductsByPrice()
},[sortValue])


    return (
        <div className={styles.brandPage}>
            <div className={styles.headerBrand}>
                {brand && categories ? <CategoriesHeader categories={brand.categories} /> : null}
                {type === "Brand" && brand ? <BrandHeader name={brand.name} /> : null}
            </div>
    
            <div className={styles.mainBrand}>
                <div className={styles.addComp}>
                    <span className={styles.addedComp}><ProductNbs /></span>
                    <span className={styles.addedComp}><SortBy sortValue={sortValue} onSort={handleChange} /></span> 
                </div>

                <div className={styles.content}>
                    <div className={styles.firstBox}>
                        <div className={styles.filterBtn}>
                            <img src={Filter} className={styles.filterIcon} alt="Filter Icon" />
                        </div>
                    </div>
                    <div className={styles.mainProduct}>
                        <div className={styles.sideB}>
                            <SideBar />
                        </div>
                        <div className={styles.products}>
                            {
                                products.map((product, index) => (
                                    <ProductCard key={index} productData={product} />

                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Brand;