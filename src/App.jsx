import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/navbar'
import Shop from './pages/Shop';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id
        ? {...item, quantity: item.quantity + 1}
        : item
      ))
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  return (
    <>
      <Navbar cartItemCount={cartItems.length} />
     <Outlet context={{ addToCart }} />
    </>
  )
}

export default App;
