import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    let { productID } = useParams();

    // const getProduct = async (productID) => {
    //     try {
    //      const response= await axios.get(`http://localhost:5000/product/getId?id=${productID}`)
    //      if(response){
    //         setProduct(response.data)
    //         product ? console.log(product) : console.log ("none")
    //      }
    //        else{
    //         console.log("there is no response")
    //        }

    //     }
    //     catch (error) {
    //         console.log(error.message)
    //     }

    // }






    useEffect(() => {
        axios.get(`http://localhost:5000/product/getId?productID=${productID}`)
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

{product ? <p>{product.name}</p> : <p>Loading...</p>}


    </>


)


}
export default ProductDetails;