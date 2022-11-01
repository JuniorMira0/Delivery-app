import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';

const produtcsMock = [
  { name: 'produto 1', qtd: 2, price: 2.5 },
  { name: 'produto 2', qtd: 1, price: 1.5 },
  { name: 'produto 3', qtd: 2, price: 3.5 },
];

export default function Checkout() {
  const [carShop, setCarShop] = useState([]);
  useEffect(() => {
    setCarShop(produtcsMock);
  }, []);

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
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.qtd}</td>
            <td>{product.price}</td>
            <td>{product.qtd * product.price}</td>
            <button type="button">Remover</button>
          </tr>
        ))}
      </table>
      <h2>{`Total: R$ ${totalPrice()}`}</h2>
    </div>
  );
}
