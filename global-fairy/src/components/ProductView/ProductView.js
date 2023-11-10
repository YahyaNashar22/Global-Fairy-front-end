import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductView.module.css";
import Colors from "../../components/Colors/Colors";
import PurshaseButtons from "../PurshaseButtons/PurshaseButtons";
import axios from "axios";


const ProductView = ({getCategoryId}) => {
    const { productId } = useParams();
    const [addBackground, setAddBackground] = useState(null)

    // Fetching
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProduct = async () =>{
        await axios.get(`${process.env.REACT_APP_PATH}/product/getId/${productId}`)   
        .then((res) => {
            const data = res.data;
            setProductData(data);
            console.log(productData)
            setLoading(false)
            
        })
        .catch((error) => {
            console.error("Error fetching product details:", error);
        });
    };

    useEffect(() => {
        getProduct()
    }, [productId]);


//   Padding the id from the Product View component into Similair Product component
    useEffect(()=>{
        if(!loading){
            getCategoryId(productData.category._id)
        }
    },[productData])

  // Passing the index from the color into ProcutView
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
    };

    const handleSizeButtonStyles = (index) => {
        setAddBackground(index);
    };

    return (
        !loading?(
            <section className={style.productView}>
                <div className={style.container}>
                    <div className={style.imageContainer}>
                        <div className={style.threeImages}>
                            <img src={`${process.env.REACT_APP_PATH}/${productData.images[1]}`} alt="Product" />
                            <img src={`${process.env.REACT_APP_PATH}/${productData.images[2]}`} alt="Product" />
                            <img src={`${process.env.REACT_APP_PATH}/${productData.images[3]}`} alt="Product" />
                        </div>
                        <div className={style.mainImage}>
                            <img src={`${process.env.REACT_APP_PATH}/${productData.images[0]}`} alt="Product" />
                        </div>
                    </div>
                    <div className={style.details}>
                        <div className={style.content}>
                            <h1 className={style.mainTitle}>{productData.name} -  {productData.brand.name}</h1>
                            <div className={style.price}>${productData.price}</div> 
                            <div className={style.description}>{productData.description}</div>
                        </div>
                        <Colors details={productData.details} onColorClick={handleColorClick}/>
                        <div className={style.size}>
                            <p className={style.title}>Choose Size</p>
                            <div className={style.sizeButtons}>
                                {productData.details[selectedColorIndex].sizes.map((size, index) => (
                                    <button key={index}
                                    className={style.sizeButton}
                                    style={{backgroundColor: addBackground === index ? "#D96093" : "#F0F0F0", color: addBackground === index ? "white" : "rgba(0, 0, 0, 0.80)"}}
                                    onClick={() => handleSizeButtonStyles(index)}
                                    >{size}</button>
                                ))}
                            </div>
                        </div>
                        <PurshaseButtons 
                        index={selectedColorIndex} 
                        stock={productData.details[selectedColorIndex].stock} 
                        productId={productId} 
                        fetchProductData={getProduct}
                        />
                    </div>
                </div>
            </section>
        ):(<h1> Loading...</h1>)
);
}

export default ProductView;