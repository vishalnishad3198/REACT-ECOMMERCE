import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './features/navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import Cart from './features/cart/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import { useDispatch } from 'react-redux';
import { cartListAsync } from './features/product-list/productListSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(cartListAsync());
  },[dispatch])
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<LoginPage></LoginPage>} />
        <Route path='/signup' element={<SignupPage></SignupPage>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/checkout' element={<Checkout></Checkout>} />
        <Route path='/product-details/:id' element={<ProductDetails></ProductDetails>} />

      </Routes>
      

    </div>
  );
}

export default App;
