import React, { useContext } from "react";
import Modal from './Modal';
import CartContext from "./CartContext";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx.cartItems.map(item => {
        return <div key={item.medicineName}>
            {item.medicineName} - {item.description} - {item.price} - 
            <span>{item.quantity}</span>
        </div>
    });

    return (<React.Fragment>
        <Modal hideCart={props.hideCart}>
            <h2>Cart</h2>
            {cartItems}
            <button onClick={props.hideCart}>
                close
            </button>
        </Modal>
    </React.Fragment>)
};

export default Cart;