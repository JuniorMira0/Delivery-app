import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import CarShop from '../components/CarShop';

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

      <div>
        <h3>Detalhes e Endereços para Entrega</h3>
        <label htmlFor="sale">
          P. Vendedora Responsável
          <select data-testid="customer_checkout__select-seller">
            <option>
              Fulana Pereira
            </option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            type="text"
          />
        </label>
      </div>
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
