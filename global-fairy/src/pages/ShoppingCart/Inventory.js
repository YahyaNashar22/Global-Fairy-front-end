import React from 'react'
import { useShoppingContext } from '../../context/ShoppingCart';
import style from "./Inventory.module.css"

export default function Inventory() {
    const {inventory, addItem, removeItem, emptyCart} = useShoppingContext();
    const testInventory = [
        {
            name: "test",
            brand: "brand",
            size: "S",
            color: "white",
            price: "$14",
            quantity: 2
        },
        {
            name: "test",
            brand: "brand",
            size: "S",
            color: "white",
            price: "$14",
            quantity: 2
        },
        {
            name: "test",
            brand: "brand",
            size: "S",
            color: "white",
            price: "$14",
            quantity: 2
        },
    ]
  return (
    <>
    <h1>My Cart</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Size</th>
            <th>Color</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
        <tr>
            <td>Name</td>
            <td>Brand</td>
            <td>Size</td>
            <td>Color</td>
            <td>Price</td>
            <td>Quantity</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>Brand</td>
            <td>Size</td>
            <td>Color</td>
            <td>Price</td>
            <td>Quantity</td>
        </tr>
        {testInventory.map((i)=>{
            return  <tr>
                        <td>{i.name}</td>
                        <td>{i.brand}</td>
                        <td>{i.size}</td>
                        <td>{i.color}</td>
                        <td>{i.price}</td>
                        <td>{i.quantity}</td>
                    </tr>
        })}
    </table>
    </>
  )
}
