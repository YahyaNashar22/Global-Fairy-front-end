import React from 'react'
import style from "./Arrows.module.css"
import back from "../../assets/icons/back.png"
import next from "../../assets/icons/next.png"

export default function Arrows() {
    return (
        <div className={style.arrowsContainer}>
            <span className={`${style.nbSpan} ${style.back}`}><img src={back} alt="back arrow" className={style.imgSpan} /></span>
            <span className={`${style.nbSpan} ${style.nbs}`}>1</span>
            <span className={`${style.nbSpan} ${style.nbs}`}>2</span>
            <span className={`${style.nbSpan} ${style.nbs}`}>3</span>
            <span className={`${style.nbSpan} ${style.nextA}`}><img src={next} alt="next arrow" className={style.imgSpan} /></span>
        </div>
    )
}
