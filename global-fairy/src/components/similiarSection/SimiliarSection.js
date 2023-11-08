  import React, { useEffect } from "react";
  import style from "./SimiliarSection.module.css";
  import SimiliarProduct from "../similiarProducts/SimiliarProduct";
  import axios from "axios";
  import { useState } from "react";

  export default function SimiliarSection({ similiarId }) {
    const [similiarProducts, setSimiliarProducts] = useState(null);

    const getSimiliar = async (similiar) => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/getFour/${similiar}`
        );
        if (response) {
          setSimiliarProducts(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    useEffect(() => {
      getSimiliar(similiarId);
    }, [similiarId]);

    return similiarProducts ? (
      <section className={style.main}>
        <h1 className={style.title}>
          You might also like
        </h1>
        <div className={style.productsHolder}>
          {similiarProducts.map((product) => (
            <SimiliarProduct key={product.id} productDetails={product} className={style.similiarCard}/>
          ))}
        </div>
      </section>
    ) : (
      <h1>Loading</h1>
    );
  }
