import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { getOrder, changeStatusDB } from '../services/sellerOrders';
import dataTestIds from '../utils/dataTestIds';

export default function SellerOrderDetails() {
  const [orderDetails, setOrdersDetails] = useState();
  const { orderId } = useParams();

  useEffect(() => {
    const getOrderDB = async () => {
      const data = await getOrder(orderId);
      setOrdersDetails(data);
    };
    getOrderDB();
  }, [orderId]);

  const changeStatus = async ({ target }) => {
    const status = target.name;
    const order = await changeStatusDB({ orderId, status });
    setOrdersDetails(order);
  };

  return (
    <div>
      <NavBar />
      {orderDetails && (
        <>
          <h1>Detalhe do pedido</h1>

          <div>
            <h2>Pedido</h2>
            <span data-testid={ dataTestIds[53] }>{orderDetails.id}</span>
            <p data-testid={ dataTestIds[54] }>{orderDetails.status}</p>
            <h3 data-testid={ dataTestIds[55] }>
              {moment(new Date(orderDetails.saleDate)).format('DD/MM/YYYY')}
            </h3>
            <button
              type="button"
              name="Preparando"
              disabled={ orderDetails.status !== 'Pendente' }
              data-testid={ dataTestIds[56] }
              onClick={ changeStatus }
            >
              Preparar pedido
            </button>
            <button
              type="button"
              name="Em Trânsito"
              data-testid={ dataTestIds[57] }
              disabled={ orderDetails.status !== 'Preparando' }
              onClick={ changeStatus }
            >
              Saiu para entrega
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
                  <td data-testid={ `${dataTestIds[58]}${i}` }>{i}</td>
                  <td data-testid={ `${dataTestIds[59]}${i}` }>{product.name}</td>
                  <td data-testid={ `${dataTestIds[60]}${i}` }>
                    {product.itemQuantity.quantity}
                  </td>
                  <td data-testid={ `${dataTestIds[61]}${i}` }>
                    {product.price}
                  </td>
                  <td data-testid={ `${dataTestIds[62]}${i}` }>
                    {(
                      Number(product.price)
                      * Number(product.itemQuantity.quantity)
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h2>Total:</h2>
            <span data-testid={ dataTestIds[63] }>
              {orderDetails.totalPrice.replace('.', ',')}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
