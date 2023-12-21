import React from "react";
import style from "./productCard.module.css";
import Sold from "../soldOut/Sold";
import { motion } from "framer-motion";

export default function ProductCard(props) {
  const isSold = props.productData.details.every(
    (detail) => detail.stock === 0
  );
  const blurClass = isSold ? style.blur : null;

  return (
    <motion.div
      className={style.card}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeIn",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      }}
    >
      <div className={`${style.imageSec} ${blurClass}`}>
        <img
          src={`${process.env.REACT_APP_PATH}/${props.productData.images[0]}`}
          alt="Product"
        />
      </div>
      <div className={style.details}>
        <span className={`${blurClass} ${style.title}`}>
          {props.productData.name}
        </span>
        <span className={`${style.priceCard} ${blurClass}`}>
          ${props.productData.price}
        </span>
        {isSold ? (
          <span className={style.soldPan}>
            <Sold />
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}
