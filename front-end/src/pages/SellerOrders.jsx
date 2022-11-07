import React, { useState, useEffect } from 'react';
import { getAllOrders } from '../services/sellerOrders';
import SellerOrder from '../components/SellerOrder';
import Navbar from '../components/Navbar';

export default function SellerOrders() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const getOrders = async () => {
      const data = await getAllOrders();
      setOrders(data);
    };
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      {orders
        && orders.map((order, index) => <SellerOrder key={ index } order={ order } />)}
    </div>
  );
}
