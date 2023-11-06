
import React, { useEffect, useState } from 'react';
import CategoriesHeader from '../../components/Categories/CategoriesHeader'
import BrandHeader from '../../components/brandHeader/BrandHeader'
import SideBar from '../../components/SideBar/Sidebar'
import ProductNbs from '../../components/productNbs/ProductNbs'
import SortBy from '../../components/sortBy/SortBy'
import ProductCard from '../../components/productCard/ProductCard'
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
            const sortedProducts = [...products].sort((a, b) => a.price - b.price)
            setProducts(sortedProducts)
        }
        else if (sortValue === 'high') {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price)
            setProducts(sortedProducts)
        }
    }
    // useEffect(() => {
    //     getCategory()
    //     const executeOrder = async () => {
    //         await getCategories();
    //         await getProductsByCategory();
    //     }
    //     const executeInOrder =  () => {
    //          getBrand();
    //         if (brand && shownCategory) {
    //             getProducts();

    //         }
    //     };

    //     if (type === "Category") {
    //         executeOrder()
    //     }
    //     else if (type === "Brand") {
    //         executeInOrder()
    //     }
    // }, [nameType, brandCategory, type, shownCategory])
    /************************************** */
    // const fetchData = async() => {
    //     let category = brandCategory
    //     const response = await axios.get(`http://localhost:5000/category/readByName/${category}`);
    //     const data = response.data
    //     setShownCategory(data)

    //     if (type === "Brand") {
    //         category = brandCategory
    //         const response = await axios.get(`http://localhost:5000/brand/readByName/${nameType}`);
    //         setBrand(response.data)
    //         if (brand) {
    //             const response = await axios.get(`http://localhost:5000/product/category-brand`, {
    //                 params: { brand: brand._id, category: shownCategory._id },
    //                 headers: {
    //                     "Content-Type": 'application/json'
    //                 },
    //             })
    //             const data = response.data
    //             const sortedProducts = data.sort((a, b) => a.price - b.price)

    //             setProducts(sortedProducts)
    //         }
    //         if (type === "Categories") {
    //             const response = await axios.get(`http://localhost:5000/category/read`);
    //             const data = response.data
    //             setCategories(data)
    //             console.log(categories)
    //             if (shownCategory) {
    //                 const response = await axios.get(`http://localhost:5000/product/category/${shownCategory._id}`);
    //                 const data = response.data
    //                 const sortedProducts = data.sort((a, b) => a.price - b.price)
    //                 setProducts(sortedProducts)
    //             }
    //         }


    //     }

    // }
    /******************************* */
    // GET THE BRAND
    const getBrand = async () => {
        console.log("get brand EXXXXXXX")
        try {
            const response = await axios.get(`http://localhost:5000/brand/readByName/${nameType}`);
            const brandData = response.data
            if (brandData) {
                setBrand(brandData)
                setCategories(brandData.categories)
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
        console.log("get category EXXXXXXX")

        try {
            if (type === "Categories") {
                const response = await axios.get(`http://localhost:5000/category/readByName/${brandCategory}`);
                if (response) {
                    console.log("there is response")
                    const categoryData = response.data
                    // console.log(categoryData)
                    if (categoryData) {
                        setShownCategory(categoryData)

                    }

                }
                else {
                    console.log("Category NOT FOUND")
                }
            }
            else if (type === "Brand") {
                const response = await axios.get(`http://localhost:5000/category/readByName/${brandCategory}`);
                if (response) {
                    const categoryData = response.data
                    if (categoryData) {
                        setShownCategory(categoryData)
                    }
                }
                else {
                    console.log("Category NOT FOUND")
                }

            }

        }
        catch (error) {
            console.log(error.message);
        }
    }

    // // GET Products
    const getProducts = async () => {
        console.log("get products by brand and category EXXXXXXX")

        await axios.get(`http://localhost:5000/product/category-brand`, {
            params: { brand: brand._id, category: shownCategory._id },
            headers: {
                "Content-Type": 'application/json'
            },
        })
            .then((response) => {
                const productsData = response.data
                const sortedProducts = productsData.sort((a, b) => a.price - b.price)
                setProducts(sortedProducts)
                // console.log(sortedProducts)
                // console.log(products)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    // GET CATEGORIES
    const getCategories = async () => {
        console.log("get categoriess EXXXXXXX")

        try {
            const response = await axios.get(`http://localhost:5000/category/read`);
            if (response) {
                console.log("there is response for categories")
                const categoriesData = response.data
                // console.log(categoriesData)
                if (categoriesData) {
                    setCategories(categoriesData)
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }

    const getProductsByCategory = async () => {
        console.log("get products by category EXXXXXXX")

        try {
            const response = await axios.get(`http://localhost:5000/product/category/${shownCategory._id}`);

            if (response) {
                const productsData = response.data
                const sortedProducts = productsData.sort((a, b) => a.price - b.price)
                setProducts(sortedProducts)

            }
        }
        catch (error) {
            console.log(error.message);
        }
    }

    /*************USE EFFECT************** */
    // useEffect(() => {
    //     getCategory()
    //     const executeOrder = async () => {
    //         await getCategories();
    //         await getProductsByCategory();
    //     }
    //     const executeInOrder = () => {
    //         getBrand();
    //         if (brand && shownCategory) {
    //             getProducts();

    //         }
    //     };

    //     if (type === "Category") {
    //         executeOrder()
    //     }
    //     else if (type === "Brand") {
    //         executeInOrder()
    //     }
    // }, [nameType, brandCategory, type, shownCategory])



    // useEffect(()=>{
    //     fetchData()
    // },[nameType, brandCategory, type, shownCategory])
    // useEffect(() => {
    //     getBrand()
    //     getProducts()
    // }, [nameType])

    // useEffect(() => {
    //     getCategory()
    //     getProducts()
    // }, [brandCategory])
    // useEffect(() => {
    //     sortProductsByPrice()
    // }, [sortValue])


    useEffect(() => {
        getBrand()
        getProducts()
    }, [])

    useEffect(() => {
        getCategory()
        getProducts()
    }, [])

    useEffect(() => {
        sortProductsByPrice()
    }, [sortValue])


    /**************************RETURN*********************** */
    return (
        <div className={styles.brandPage}>
            <div className={styles.headerBrand}>
                {categories ? <CategoriesHeader typeView={type} categories={categories} /> : null}
                {type === "Brand" && brand ? <BrandHeader name={brand.name} /> : null}
            </div>

            <div className={styles.mainBrand}>
                <div className={styles.addComp}>
                    <span className={styles.addedComp}><ProductNbs productsNb={products.length} /></span>
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