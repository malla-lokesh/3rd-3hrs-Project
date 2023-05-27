import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MedicineForm from './Components/MedicineForm';
import CartContextProvider from './Components/CartContextProvider';
import MedicinesList from './Components/MedicinesList';
import Cart from './Components/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (<React.Fragment>
    <CartContextProvider>
      {cartIsShown && <Cart hideCart={hideCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <hr/>
      <MedicineForm/>
      <hr className='horizontal'/>
      <MedicinesList/>
    </CartContextProvider>
  </React.Fragment>);
}


export default App;