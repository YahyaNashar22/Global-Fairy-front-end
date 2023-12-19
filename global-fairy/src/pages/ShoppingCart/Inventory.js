import React from "react";
import { useShoppingContext } from "../../context/ShoppingContext.js";
import style from "./Inventory.module.css";
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";

export default function Inventory() {
  const { inventory, addToCart } = useShoppingContext();

  return (
    <>
      <h1 className={style.title}>My Cart</h1>

      {inventory
        ? inventory.map((item, index) => {
            return (
              <ShoppingCard
                item={item}
                index={index}
                key={index}
              ></ShoppingCard>
            );
          })
        : ""}
    </>
  );
}
