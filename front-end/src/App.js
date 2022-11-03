import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import SellerOrders from './pages/SellerOrders';
import OrderCustomer from './pages/OrderCustomer';
import OrderDetails from './pages/OrderDetails';
import CustomerOrderDetails from './pages/CustomerOrderDetails';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <OrderCustomer /> } />
      <Route path="/seller/orders" element={ <OrderCustomer /> } />
      <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route
        path="/customer/orders/:idSale"
        element={ <CustomerOrderDetails /> }
      />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
    </Routes>
  );
}

export default App;
