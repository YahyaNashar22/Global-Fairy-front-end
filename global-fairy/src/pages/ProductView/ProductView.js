import { useState } from "react";
import ProductViewDetails from "../../components/ProductView/ProductView";
import SimiliarSection from "../../components/similiarSection/SimiliarSection";
import { Helmet } from "react-helmet-async";
import "./ProductView.module.css";

const ProductView = () => {
  const [idC, setIdC] = useState(null);
  const change = (id) => {
    setIdC(id);
  };
  return (
    <>
      <Helmet>
        <title>Product View</title>
        <meta name="description" content="Product view"></meta>
        <link rel="canonical" href="/add product" />
      </Helmet>
      <ProductViewDetails getCategoryId={change} />
      {idC ? <SimiliarSection similiarId={idC} /> : <h1>Loading...</h1>}
    </>
  );
};

export default ProductView;
