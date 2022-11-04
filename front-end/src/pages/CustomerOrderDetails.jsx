import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import dataTestIds from '../utils/dataTestIds';
import { getOrder } from '../services/customerOrders';

const mockDetails = {
  id: 1,
  status: 'pendente',
  saleDate: '01/11/22',
  nameSeller: 'Fulaninho',
  totalPrice: 28.46,
  products: [
    { name: 'Skol Lata 250ml', quantity: 3, price: 3.5 },
    { name: 'Brahminha', quantity: 98, price: 2 },
  ],
};

export default function CustomerOrderDetails() {
  const [orderDetails, setOrderDetails] = useState(mockDetails);
  const { idOrder } = useParams();

  useEffect(() => {
    const order = async (id) => {
      const saleDB = await getOrder(id);
      setOrderDetails(mockDetails || saleDB);
    };
    order(idOrder);
  }, [idOrder]);

  return (
    <div className="orderDetails-container">
      <NavBar />
      <h1>Detalhe do pedido</h1>

      <div>
        <h3>Pedido</h3>
        <h3 data-testid={ dataTestIds[37] }>{orderDetails.id}</h3>
        <p data-testid={ dataTestIds[38] }>{orderDetails.nameSeller}</p>
        <h3 data-testid={ dataTestIds[39] }>{orderDetails.saleDate}</h3>
        <h3 data-testid={ dataTestIds[40] }>{orderDetails.status}</h3>
        <button type="button" data-testid={ dataTestIds[47] }>
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.products.map((product, i) => (
            <tr key={ i }>
              <td data-testid={ `${dataTestIds[41]}${i}` }>{i}</td>
              <td data-testid={ `${dataTestIds[42]}${i}` }>{product.name}</td>
              <td data-testid={ `${dataTestIds[43]}${i}` }>{product.quantity}</td>
              <td data-testid={ `${dataTestIds[44]}${i}` }>{product.price}</td>
              <td data-testid={ `${dataTestIds[45]}${i}` }>
                {product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total:</h3>
        <span data-testid={ dataTestIds[46] }>{orderDetails.totalPrice}</span>
      </div>
    </div>
  );
}
