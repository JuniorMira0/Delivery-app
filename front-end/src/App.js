import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <Order /> } />
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route
        path="/"
        element={ <Navigate to="/login" replace /> }
      />
    </Routes>
  );
}

export default App;
