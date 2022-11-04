import React, { useState, useEffect } from 'react';
import getOrders from '../services/orders';
import SellerOrder from '../components/SellerOrder';
import Navbar from '../components/Navbar';

export default function SellerOrders() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const saveOrders = async () => {
      const data = await getOrders();

      setOrders(data);
    };
    saveOrders();
  }, []);

  return (
    <div>
      <Navbar />
      {orders
        && orders.map((order, index) => <SellerOrder key={ index } order={ order } />)}
    </div>
  );
}
