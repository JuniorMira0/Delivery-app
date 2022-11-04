import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../components/Navbar';
import CarShop from '../components/CarShop';
import CheckoutDetails from '../components/CheckoutDetails';
import { createOrder } from '../services/customerOrders';
import { selectProduct } from '../redux/userProducts';

export default function Checkout() {
  const navigate = useNavigate();
  const products = useSelector(selectProduct);
  const [infos, setInfos] = useState({
    seller: '',
    deliveryAddress: '',
    deliveryNumber: '',
    totalPrice: '',
  });

  const getTotalPrice = async () => {
    const totalPrice = products.reduce((acc, { price, quantity }) => {
      acc += price * quantity;
      return acc;
    }, 0);
    infos.totalPrice = totalPrice.toFixed(2);
  };

  const finalizedBuy = async () => {
    await getTotalPrice();
    const orderId = await createOrder({ ...infos, items: products });
    navigate(`/customer/orders/${orderId}`);
  };

  return (
    <div>
      <NavBar />
      <h1>Checkout</h1>
      <p>Finalizar Pedido</p>
      <CarShop />
      <CheckoutDetails props={ { infos, setInfos } } />

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ finalizedBuy }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
