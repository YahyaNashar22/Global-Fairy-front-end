
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
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Brand = () => {
    const { type, nameType } = useParams()
    const [brand, setBrand] = useState(null)
    const [categories, setCategories] = useState(null)
    const [loading, setloading] = useState(true)
    const [shownCategory, setShownCategory] = useState()
    const [products, setProducts] = useState([])
    const [sortValue, setSortValue] = useState('low')
    const [effectCompleted, setEffectCompleted] = useState(false)
    const[filetredProducts,setFilteredProducts]=useState([])
    const[filterOption,setFilterOption]=useState()
    const navigate = useNavigate()
    const handleChange = (sortValue) => {
        setSortValue(sortValue)
    }
    const handleCategory = (index) => {
        setShownCategory(categories[index])
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

    const handleFilter = (filterValue) => {
        getFilteredProducts(filterValue)
    }

const resetOption=()=>{
    console.log(filterOption)
    setFilterOption(false)
}

    const getFilteredProducts = async (values) => {
        try {
            console.log("filetreedddd fct")
            const requestedData = values
            console.log(values)
            const response = await axios.post('http://localhost:5000/product/filter', requestedData)
            if (response) {

                let sortedProducts = []
                if (sortValue === 'high') {
                    sortedProducts = [...response.data].sort((a, b) => b.price - a.price)
                }
                else {
                    sortedProducts = [...response.data].sort((a, b) => a.price - b.price)
                }
                setFilteredProducts(sortedProducts)
                setFilterOption(true)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }


    // GET THE BRAND
    const getBrand = async () => {
        console.log("get brand EXXXXXXX")
        try {
            const response = await axios.get(`http://localhost:5000/brand/readByName/${nameType}`);
            const brandData = response.data
            if (brandData) {
                setBrand(brandData)
                setCategories(brandData.categories)
                setShownCategory(brandData.categories[0])
                console.log(categories)
                console.log(shownCategory)
            }

            if (!brandData) {
                console.log("BRAND NOT FOUND")
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }



    // // GET Products
    const getProducts = async () => {
        console.log("get products by brand and category EXXXXXXX")
        console.log(brand)
        console.log(shownCategory)
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

            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    // GET CATEGORIES
    const getCategories = async () => {
        console.log("get categoriess EXXXXXXX")
        setloading(true)
        try {
            const response = await axios.get(`http://localhost:5000/category/read`);
            if (response) {
                const categoriesData = response.data
                console.log("there is response for categories")
                setCategories(categoriesData)
                setShownCategory(response.data[0])
                if (categories) {
                    console.log(categories)

                }

            }
            setloading(false)
        }
        catch (error) {
            setloading(false)
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

    useEffect(() => {
        if (type === "Brand") {
            getBrand().then(() =>
                setEffectCompleted(true)

            )
        }
        if (type === "Category") {
            console.log(type)
            getCategories().then(() => {
                setEffectCompleted(true);
            })
        }

    }, [type])


    useEffect(() => {
        if (effectCompleted) {
            if (type === "Brand") {
                getProducts().then(() => {
                    setloading(false)

                })

            }
            if (type === "Category") {
                getProductsByCategory().then(() => {
                    setloading(false)

                })


            }
        }
    }, [effectCompleted, shownCategory])


    useEffect(() => {
        sortProductsByPrice()
    }, [sortValue])


    /**************************RETURN*********************** */
    return (!loading ? (
        <div className={styles.brandPage}>
            <div className={styles.headerBrand}>
                {categories ? <CategoriesHeader typeView={type} categories={categories} changeCategory={handleCategory} shown={shownCategory} isloading={loading} /> : null}
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
                            <SideBar shown={shownCategory} showFiltered={handleFilter} brand={brand} reset={resetOption} />
                        </div>
                        <div className={styles.products}>
                            {!filterOption?(  products.map((product, index) => (
                                    <Link to={`/view/${product._id}`} key={index} className={styles.productCards}>
                                    <ProductCard  productData={product} />
                                    </Link>
                                ))):(
                                    filetredProducts.map((product, index) => (
                                        <Link to={`/view/${product._id}`} key={index} className={styles.productCards}>
                                        <ProductCard  productData={product} />
                                        </Link>
                                    ))
                                )
                              
                            }

                        </div>
                    </div>
                </div>

            </div>

        </div>

    ) : (
        <h1>Loading....</h1>
    )
    )

}


export default Brand;

























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
/******************************* */
// GET CATEGORY
// const getCategory = async () => {

//     try {

//         if (type === "Categories") {
//             const response = await axios.get(`http://localhost:5000/category/readByName/${brandCategory}`);
//             if (response) {
//                 console.log("there is response")
//                 const categoryData = response.data
//                 // console.log(categoryData)
//                 if (categoryData) {
//                     setShownCategory(categoryData)

//                 }

//             }
//             else {
//                 console.log("Category NOT FOUND")
//             }
//         }
//         else if (type === "Brand") {
//             const response = await axios.get(`http://localhost:5000/category/readByName/${brandCategory}`);
//             if (response) {
//                 const categoryData = response.data
//                 if (categoryData) {
//                     setShownCategory(categoryData)
//                 }
//             }
//             else {
//                 console.log("Category NOT FOUND")
//             }

//         }

//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }



// console.log(shownCategory)
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

