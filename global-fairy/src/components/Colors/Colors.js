import React from "react";
import style from './Colors.module.css'

const Colors = () => {
    return(
      <div className={style.colorsArea}>
        <p className={style.title}>Select A Color</p>
        <ul className={style.colors}>
            <li className={style.color} style={{ backgroundColor: '#E8E5DF' }}></li>
            <li className={style.color} style={{ backgroundColor: '#314F4A' }}></li>
            <li className={style.color} style={{ backgroundColor: '#31344F' }}></li>
        </ul>
      </div>
    )
}

export default Colors;