import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import CarShop from '../components/CarShop';
import CheckoutDetails from '../components/CheckoutDetails';

export default function Checkout() {
  const navigate = useNavigate();

  const finalizedBuy = () => {
    navigate('customer/orders/1');
  };

  return (
    <div>
      <NavBar />
      <h1>Checkout</h1>
      <p>Finalizar Pedido</p>
      <CarShop />
      <CheckoutDetails />

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
