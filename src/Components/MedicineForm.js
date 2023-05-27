import React, { useContext, useState } from "react";
import './MedicineForm.css';
import CartContext from "./CartContext";
import ApiContext from "./ApiContext";

const MedicineForm = () => {
    const [medicineName, setMedicineName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const cartCtx = useContext(CartContext);
    const apiCtx = useContext(ApiContext);

    const medicineFormSubmitHandler = (event) => {
        event.preventDefault();

        const medicine = {
            medicineName: medicineName,
            description: description,
            price: price
        }
        setMedicineName('');
        setDescription('');
        setPrice('');

        cartCtx.addItem(medicine);
        apiCtx.addItem(medicine);

        fetch(`https://crudcrud.com/api/27f36e7f57484273bb087c6e88a8fa14/medicines`, {
            method: 'POST',
            body: JSON.stringify({...medicine, quantity: 1}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (<React.Fragment>
        <h2 className='h2Title'>Add <span className='new'>New</span> medicines to the inventory</h2>
        <form className='medicineForm' onSubmit={medicineFormSubmitHandler}>
            <label>Medicine Name :</label>
            <input type='text' value={medicineName} onChange={(e) => setMedicineName(e.target.value)} required/>
            <label>About Medicine :</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
            <label>Price :</label>
            <input type='number' min={10} max={2000}
                    value={price} onChange={(e) => setPrice(e.target.value)} required/>
            <button 
                type='submit' 
                className='addToInventoryButton'
            >Add to inventory</button>
        </form>
    </React.Fragment>)
};

export default MedicineForm;