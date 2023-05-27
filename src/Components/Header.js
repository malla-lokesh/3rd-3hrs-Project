import React from "react";
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (<React.Fragment>
        <div className='header'>
            <h1>Medicine Inventory React Project</h1>
            <HeaderCartButton showCart={props.showCart}/>
        </div>
    </React.Fragment>)
};

export default Header;