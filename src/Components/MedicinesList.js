import React, { useContext, useEffect } from "react";
import './MedicinesList.css';
import CartContext from "./CartContext";
import ApiContext from "./ApiContext";

const MedicinesList = () => {
    const cartCtx = useContext(CartContext);

    useEffect(() => {
        fetch(`https://crudcrud.com/api/27f36e7f57484273bb087c6e88a8fa14/medicines`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                data.forEach(item => {
                    cartCtx.addItem(item);
                });
            });
    }, []);

    const items = <ul>
        {cartCtx.items.map(item => {
            return <li className='listItems' key={item.medicineName}>
                <div>{item.medicineName}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <button className='addToCartButton' onClick={() => cartCtx.addItemToCart(item)}>
                    Add to Cart
                </button>
            </li>
        })}
    </ul>

    return (<React.Fragment>
        <h2 className='h2TitleInMedicinesList'>Medicines in the Inventory</h2>
        <div className='medicineDetailsHeadings'>
            <div>Medicine Name</div>
            <div>Description</div>
            <div>Price</div>
            <div></div>
        </div>
        {items}
    </React.Fragment>)
};

export default MedicinesList;