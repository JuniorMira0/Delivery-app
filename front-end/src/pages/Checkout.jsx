import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionProduct, selecProduct } from '../redux/userProducts';
import NavBar from '../components/Navbar';

export default function Checkout() {
  const [carShop, setCarShop] = useState(useSelector(selecProduct) || []);
  // const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    carShop.forEach((product) => {
      total += product.price * product.qtd;
    });
    return total;
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
        {carShop.map((product, index) => (
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
              {product.qtd}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {product.price}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {product.qtd * product.price}
            </td>
            <button
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              type="button"
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
    </div>
  );
}
