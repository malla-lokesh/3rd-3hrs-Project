import React from "react"

const CartContext = React.createContext({
    items: [],
    cartItems: [],
    totalCartQuantity: 0,
    addItem: (item) => {},
    addItemToCart: (item) => {}
});

export default CartContext;