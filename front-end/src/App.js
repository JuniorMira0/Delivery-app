import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import SellerOrders from './pages/SellerOrders';
import CustomerOrder from './pages/CustomerOrder';
import SellerOrderDetails from './pages/SellerOrderDetails';
import CustomerOrderDetails from './pages/CustomerOrderDetails';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <CustomerOrder /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
      <Route path="/customer/orders/:idOrder" element={ <CustomerOrderDetails /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/" element={ <Navigate to="/login" replace /> } />
    </Routes>
  );
}

export default App;
