import { createContext, useContext, useState } from "react";

export const ShoppingContext = createContext();

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
  };  


export const CartProvider = ({children}) =>{
    const [inventory, setInventory] = useState([]);
    
    const addToCart = (item) =>{
        let found= false;
        inventory.forEach(element => {
            if(item._id === element._id){
                found = true;
            }
        });
        if(!found) setInventory((prevInventory) => [...prevInventory, item]);
    }
    const removeItem = (itemId) =>{
        setInventory((prevInventory) => prevInventory.filter(item => item._id !== itemId));
    }
    const emptyCart = () =>{
        setInventory([]);
    }


    

    return (
        <ShoppingContext.Provider value={{ inventory, addToCart,removeItem,emptyCart }}>
            {children}
        </ShoppingContext.Provider>
    );
};


