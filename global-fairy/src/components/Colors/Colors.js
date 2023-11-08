import React, { useState } from "react";
import style from "./Colors.module.css";

const Colors = ({ details, onColorClick }) => {
  const [addBorder, setAddBorder] = useState(null);

  const handleColorClick = (index) => {
    onColorClick(index);
    setAddBorder(index);
  };

  return (
    <div className={style.colorsArea}>
      <p className={style.title}>Select A Color</p>
      <ul className={style.colors}>
        {details.map((detail, index) => (
          <li
            key={index}
            className={style.color}
            style={{ backgroundColor: detail.color, border: addBorder === index ? "3px solid #D96093" : "1px solid black" }}
            onClick={() => handleColorClick(index)}></li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
