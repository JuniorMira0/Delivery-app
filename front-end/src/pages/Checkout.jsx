import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../components/Navbar';
import CarShop from '../components/CarShop';
import CheckoutDetails from '../components/CheckoutDetails';
import { createOrder } from '../services/orders';
import { selectProduct } from '../redux/userProducts';

export default function Checkout() {
  const navigate = useNavigate();
  const products = useSelector(selectProduct);
  const [infos, setInfos] = useState({
    nameSeller: '',
    address: '',
    number: '',
  });

  const finalizedBuy = async () => {
    const order = await createOrder({ ...infos, products });
    navigate(`/customer/orders/${order.id}`);
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
