import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectProduct, actionRemoveItem } from '../redux/userProducts';
import NavBar from '../components/Navbar';

export default function Checkout() {
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2).replace('.', ',');
  };

  const removeItemInShopCar = (index) => {
    dispatch(actionRemoveItem(index));
  };

  const finalizedBuy = () => {
    navigate('customer/orders/1');
  };

  return (
    <div>
      <NavBar />
      <h1>Checkout</h1>
      <p>Finalizar Pedido</p>
      <table>
        <tr>
          <td>Item</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Valor unitário</td>
          <td>Subtotal</td>
          <td>Remover Item</td>
        </tr>
        {products.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {product.name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {product.quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {product.price.replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {String((product.quantity * product.price).toFixed(2)).replace('.', ',')}
            </td>
            <button
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              type="button"
              onClick={ () => removeItemInShopCar(index) }
            >
              Remover

            </button>
          </tr>
        ))}
      </table>
      <h2
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: R$ ${totalPrice()}`}

      </h2>

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
