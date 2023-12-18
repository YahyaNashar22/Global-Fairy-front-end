import React, { useEffect, useState } from "react";
import CategoriesHeader from "../../components/Categories/CategoriesHeader";
import BrandHeader from "../../components/brandHeader/BrandHeader";
import SideBar from "../../components/SideBar/Sidebar";
import ProductNbs from "../../components/productNbs/ProductNbs";
import SortBy from "../../components/sortBy/SortBy";
import ProductCard from "../../components/productCard/ProductCard";
import Filter from "../../assets/icons/filter.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Brand.module.css";
import { Link } from "react-router-dom";
import image from "../../assets/icons/refresh.png";
import { Helmet } from "react-helmet-async";

const Brand = () => {
  const { type, nameType } = useParams();
  const [brand, setBrand] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setloading] = useState(true);
  const [shownCategory, setShownCategory] = useState();
  const [products, setProducts] = useState([]);
  const [sortValue, setSortValue] = useState("low");
  const [effectCompleted, setEffectCompleted] = useState(false);
  const [filetredProducts, setFilteredProducts] = useState([]);
  const [filterOption, setFilterOption] = useState();
  const handleChange = (sortValue) => {
    setSortValue(sortValue);
  };
  const handleCategory = (index) => {
    setShownCategory(categories[index]);
  };

  const sortProductsByPrice = () => {
    if (sortValue === "low") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (sortValue === "high") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
  };

  const handleFilter = (filterValue) => {
    getFilteredProducts(filterValue);
  };

  const resetOption = () => {
    setFilterOption(false);
  };

  const getFilteredProducts = async (values) => {
    try {
      const requestedData = values;
      const response = await axios.post(
        `${process.env.REACT_APP_PATH}/product/filter`,
        requestedData
      );
      if (response) {
        let sortedProducts = [];
        if (sortValue === "high") {
          sortedProducts = [...response.data].sort((a, b) => b.price - a.price);
        } else {
          sortedProducts = [...response.data].sort((a, b) => a.price - b.price);
        }
        setFilteredProducts(sortedProducts);
        setFilterOption(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // GET THE BRAND
  const getBrand = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PATH}/brand/readByName/${nameType}`
      );
      const brandData = response.data;
      if (brandData) {
        setBrand(brandData);
        setCategories(brandData.categories);
        setShownCategory(brandData.categories[0]);
      }

      if (!brandData) {
        console.log("BRAND NOT FOUND");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // // GET Products
  const getProducts = async () => {
    await axios
      .get(`${process.env.REACT_APP_PATH}/product/category-brand`, {
        params: { brand: brand._id, category: shownCategory._id },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const productsData = response.data;
        const sortedProducts = productsData.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // GET CATEGORIES
  const getCategories = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PATH}/category/read`
      );
      if (response) {
        const categoriesData = response.data;
        setCategories(categoriesData);
        setShownCategory(response.data[0]);
      }
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error.message);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PATH}/product/category/${shownCategory._id}`
      );

      if (response) {
        const productsData = response.data;
        const sortedProducts = productsData.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  /*************USE EFFECT************** */

  useEffect(() => {
    if (type === "Brand") {
      getBrand().then(() => setEffectCompleted(true));
    }
    if (type === "Category") {
      getCategories().then(() => {
        setEffectCompleted(true);
      });
    }
  }, [type]);

  useEffect(() => {
    if (effectCompleted) {
      if (type === "Brand") {
        getProducts().then(() => {
          setloading(false);
        });
      }
      if (type === "Category") {
        getProductsByCategory().then(() => {
          setloading(false);
        });
      }
    }
  }, [effectCompleted, shownCategory]);

  useEffect(() => {
    sortProductsByPrice();
  }, [sortValue]);

  // useEffect(()=>{
  // setFilterOption(filterOption)
  // },[shownCategory])

  /**************************RETURN*********************** */
  return !loading ? (
    <div className={styles.brandPage}>
      <Helmet>
        <title>Brand</title>
        <meta name="description" content="Types and Brands"></meta>
        <link rel="canonical" href="/Brand" />
      </Helmet>
      <div className={styles.headerBrand}>
        {categories ? (
          <CategoriesHeader
            typeView={type}
            categories={categories}
            changeCategory={handleCategory}
            shown={shownCategory}
            isloading={loading}
          />
        ) : null}
        {type === "Brand" && brand ? <BrandHeader name={brand.name} /> : null}
      </div>

      <div className={styles.mainBrand}>
        <div className={styles.addComp}>
          {!filterOption ? (
            <span className={styles.addedComp}>
              <ProductNbs productsNb={products.length} />
            </span>
          ) : (
            <span className={styles.addedComp}>
              <ProductNbs productsNb={filetredProducts.length} />
            </span>
          )}
          <span className={styles.addedComp}>
            <SortBy sortValue={sortValue} onSort={handleChange} />
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.firstBox}>
            <div className={styles.filterBtn}>
              <img
                src={Filter}
                className={styles.filterIcon}
                alt="Filter Icon"
              />
            </div>
          </div>
          <div className={styles.mainProduct}>
            <div className={styles.sideB}>
              <SideBar
                shown={shownCategory}
                showFiltered={handleFilter}
                brand={brand}
                reset={resetOption}
              />
            </div>
            <div className={styles.products}>
              {!filterOption
                ? products.map((product, index) => (
                    <Link
                      to={`/view/${product._id}`}
                      key={index}
                      className={styles.productCards}
                    >
                      <ProductCard productData={product} />
                    </Link>
                  ))
                : filetredProducts.map((product, index) => (
                    <Link
                      to={`/view/${product._id}`}
                      key={index}
                      className={styles.productCards}
                    >
                      <ProductCard productData={product} />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.loading}>
      <img className={styles.imageLoading} src={image} alt="loading" />
      <h1 className={styles.titleLoading}>Loading...</h1>
    </div>
  );
};

export default Brand;
