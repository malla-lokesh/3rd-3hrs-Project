import React from "react";
import './HeaderCartButton.css';

const HeaderCartButton = (props) => {
    return (<React.Fragment>
        <button className='cartButton' onClick={props.showCart}>
            Cart
            <div className='cartQuantity'>0</div>
        </button>
    </React.Fragment>)
};

export default HeaderCartButton;