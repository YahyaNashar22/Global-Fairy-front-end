import { createContext, useContext, useState } from "react";

const ShoppingContext = createContext();

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
  };  

export const CartProvider = ({children}) =>{
    const [inventory, setInventory] = useState([]);
    
    const addItem = (item) =>{
        setInventory({...inventory, item});
    }
    const removeItem = () =>{
        const {item, ...rest} = inventory;
        setInventory(rest);
    }
    const emptyCart = () =>{
        setInventory([]);
    }


    

    return (
        <ShoppingContext.Provider value={{ inventory, addItem,removeItem,emptyCart }}>
            {children}
        </ShoppingContext.Provider>
    );
};


