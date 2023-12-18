import React from 'react'
import styles from './ShoppingCard.module.css'
import Trash from '../svgIcons/Trash'
import { useShoppingContext } from '../../context/ShoppingContext.js';

export default function ShoppingCard({item, index}) {

    const {removeItem} = useShoppingContext();

    const objInventory = item;
    let description = objInventory.description;
    console.log("long description", description);

    const textLimiter = (description)=>{
        if(description.length > 70){
            description = description.substr(0,70) + '...';
        }
        return description;
    }
    
    description = textLimiter(description);

    const handleRemove = (id)=>{
        console.log(id);
        removeItem(id)
    }
    
  return (
    <div className={styles.productContainer}>
        <img src={`${process.env.REACT_APP_PATH}/${objInventory.images[1]}`} alt='Product' className={styles.productImage} height={300} width={200}/>
            <ul className={styles.productInfo}>
                <li>{objInventory.name}</li>
                <li><h3>{objInventory.brand.name}</h3></li>
                <li><h3>{description}</h3></li>
                <li><p>Size: {objInventory.details[0].sizes[0]}</p></li>
                <li><p className={styles.listColor}>Color: {objInventory.details[0].color}</p></li>
                <li><button  onClick={()=> handleRemove(objInventory._id)} className={styles.removeItem}><Trash/>REMOVE</button></li>
            </ul>
        <div className={styles.productQuantity}>
            <div className={styles.inputContainer}>
                <input type='number' className={styles.quantityInput} value={1} disabled></input>
                <p>Quantity</p>
            </div>
            <p className={styles.price}>${objInventory.price}</p>
        </div>
    </div>
  )
}


