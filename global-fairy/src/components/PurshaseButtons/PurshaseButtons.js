import React, { useEffect } from "react";
import style from "./PurshaseButtons.module.css";

const PurshaseButtons = () => {

  return (
    <>
      <div className={style.purshaseButtons}>
        <button className={style.counter}>
          <span className={style.decrease}>-</span>
          <span className={style.count}>1</span>
          <span className={style.increase}>+</span>
        </button>
        <button className={style.addToCard}>Add to Cart</button>
      </div>
      <button className={style.soldout} style={{ display: "none" }}>
        Sold Out
      </button>
    </>
  );
};

export default PurshaseButtons;