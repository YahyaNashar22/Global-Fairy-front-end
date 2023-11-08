import React from "react";
import style from './Colors.module.css'

const Colors = ({ details, onColorClick }) => {

    const handleColorClick = (index) => {
        onColorClick(index);
      };

    return(
      <div className={style.colorsArea}>
        <p className={style.title}>Select A Color</p>
        <ul className={style.colors}>
            {details.map((detail, index) => (
                <li key={index} className={style.color} style={{ backgroundColor: detail.color }} onClick={() => handleColorClick(index)}></li>
            ))}
        </ul>
      </div>
    )
}

export default Colors;