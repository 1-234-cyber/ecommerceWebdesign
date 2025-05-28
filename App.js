import React, { useEffect } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
import Login from './Pages/Login';
import Jewellery from './Pages/Jewellery';
import Bags from './Pages/Bags';
import Glasses from './Pages/Glasses';
import AboutP from './Pages/AboutP';
import BestSellings from './Pages/BestSellings';
import NewArrival from './Pages/NewArrival';
import ProductDetail from './Component/Productdetail';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/Checkout';
import Products from './Component/Products';
import Navbar from './Component/Navbar';
const App = () => {
  useEffect(() => {
    
  }, []);

  return (
    

     
        
         <BrowserRouter>
     <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/Jewellery" element={<Jewellery />} />
        <Route path="/Glasses" element={<Glasses />} />
            <Route path="/about" element={<AboutP />} />
            <Route path="/best-selling" element={<BestSellings />} />
            <Route path="/new-arrival" element={<NewArrival />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<Checkout />} />
         
          </Routes>
        </BrowserRouter>
  
  );
};

export default App;


