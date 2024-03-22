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
import ProtectedPage from './pages/ProtectedPage';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(cartListAsync());
  },[dispatch])
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        
        <Route path='/' element={<ProtectedPage><Home></Home></ProtectedPage>} />
        <Route path='/cart' element={<ProtectedPage><Cart></Cart></ProtectedPage>} />
        <Route path='/checkout' element={<ProtectedPage><Checkout></Checkout></ProtectedPage>} />
        <Route path='/product-details/:id' element={<ProtectedPage><ProductDetails></ProductDetails></ProtectedPage>} />
        
        <Route path='/login' element={<LoginPage></LoginPage>} />
        <Route path='/signup' element={<SignupPage></SignupPage>} />

      </Routes>
      

    </div>
  );
}

export default App;
