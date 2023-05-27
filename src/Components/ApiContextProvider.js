import React, { useState } from "react";
import ApiContext from "./ApiContext";

const ApiContextProvider = (props) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartQuantity, setTotalCartQuantity] = useState(0);

    const addItemHandler = (item) => {
        setItems((prevItems) => [...prevItems, {...item}]);
    }

    const addItemToCartHandler = (item) => {
        const index = cartItems.findIndex((i) => i.medicineName === item.medicineName);

        if(index === -1) {
            setCartItems((prevCartItems) => [...prevCartItems, {...item, quantity: 1}]);
        } else {
            const updatedCartItems = [...cartItems];
            updatedCartItems[index].quantity += 1;
            setCartItems(updatedCartItems);
        }
        setTotalCartQuantity(0);
    }

    const apiContextValue = {
        items: items,
        cartItems: cartItems,
        totalCartQuantity: totalCartQuantity,
        addItem: addItemHandler,
        addItemToCart: addItemToCartHandler
    }

    return <ApiContext.Provider value={apiContextValue}>
        {props.children}
    </ApiContext.Provider>
}

export default ApiContextProvider;