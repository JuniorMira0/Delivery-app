import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import NavBar from '../components/Navbar';
import dataTestIds from '../utils/dataTestIds';
import { getOrder } from '../services/customerOrders';

export default function CustomerOrderDetails() {
  const [orderDetails, setOrderDetails] = useState(false);
  const { idOrder } = useParams();

  useEffect(() => {
    const order = async (id) => {
      const saleDB = await getOrder(id);
      setOrderDetails(saleDB);
    };
    order(idOrder);
  }, [idOrder]);

  const { id, seller, saleDate, status, products, totalPrice } = orderDetails;

  return (
    <div className="orderDetails-container">
      <NavBar />
      {orderDetails && (
        <>
          <h1>Detalhe do pedido</h1>
          <div>
            <h3>Pedido</h3>
            <h3 data-testid={ dataTestIds[37] }>{id}</h3>
            <p data-testid={ dataTestIds[38] }>{seller.name}</p>
            <h3 data-testid={ dataTestIds[39] }>
              {moment(new Date(saleDate)).format('DD/MM/YYYY')}
            </h3>
            <h3 data-testid={ dataTestIds[40] }>{status}</h3>
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
              {products.map((product, i) => (
                <tr key={ i }>
                  <td data-testid={ `${dataTestIds[41]}${i}` }>{i}</td>
                  <td data-testid={ `${dataTestIds[42]}${i}` }>{product.name}</td>
                  <td data-testid={ `${dataTestIds[43]}${i}` }>
                    {product.itemQuantity.quantity}
                  </td>
                  <td data-testid={ `${dataTestIds[44]}${i}` }>
                    {product.price}
                  </td>
                  <td data-testid={ `${dataTestIds[45]}${i}` }>
                    {(product.price * product.itemQuantity.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h3>Total:</h3>
            <span data-testid={ dataTestIds[46] }>{totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
}
