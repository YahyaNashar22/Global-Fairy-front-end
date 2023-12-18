import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    let { productID } = useParams();



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_PATH}/product/getId?productID=${productID}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [productID]);


return (
    <>
    <Helmet>
        <title>Products Details</title>
        <meta
          name="description"
          content="Product details"
        ></meta>
        <link rel="canonical" href="/add product" />
      </Helmet>

{product ? <p>{product.name}</p> : <p>Loading...</p>}

    </>


)


}
export default ProductDetails;