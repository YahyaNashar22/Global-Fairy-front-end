import React, { useState } from "react";
import style from "./PurshaseButtons.module.css";
import axios from "axios";
import { useShoppingContext } from "../../context/ShoppingContext";

const PurchaseButtons = ({ index, stock, productId, fetchProductData }) => {
  // This for the count button
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false); 
  const {inventory, addToCart} = useShoppingContext(); 

  const decreaseOne = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseOne = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const updateStock = async()=>{
    const product = await fetchProductData();
    console.log("my productt: ", product)
    addToCart(product)
        console.log(inventory)
    // try{
    //     const response=await axios.put(`${process.env.REACT_APP_PATH}/product/updateStock/${productId}/${index}/${count}`)
    //   if(response){
    //     fetchProductData();
    //     setAddedToCart(true);
    //     setCount(1);
        
    //   }
    // }
    // catch(error){
    //     console.log(error.message)
    // }

} 

  return (
    <>
      <div className={style.purshaseButtons} style={{ display: stock !== 0 ? "flex" : "none" }}>
        <button className={style.counter}>
          <span className={style.decrease} onClick={decreaseOne}>-</span>
          <span className={style.count}>{count}</span>
          <span className={style.increase} onClick={increaseOne}>+</span>
        </button>
        <button 
        className={style.addToCard}
        style={{ backgroundColor: addedToCart ? "#bd5580" : "#D96093" }}
        onClick={()=>updateStock()}
        >{addedToCart ? "Added to Cart!" : "Add to Cart"}</button>
      </div>
      <button className={style.soldOut} style={{ display: stock === 0 ? "block" : "none" }}>
        Sold Out
      </button>
    </>
  );
};

export default PurchaseButtons;