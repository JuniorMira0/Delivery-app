import { useParams } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../components/Navbar';
import dataTestIds from '../utils/dataTestIds';
import { getSale } from '../services/customerOrderDetails';

const mockDetails = {
  id: 1,
  status: 'pendente',
  sale_date: '01/11/22',
  name_seller: 'Fulaninho',
  total_price: 28.46,
  products: [
    { name: 'Skol Lata 250ml', quantity: 3, price: 3.5 },
    { name: 'Brahminha', quantity: 98, price: 2 },
  ],
};

export default function CustomerOrderDetails() {
  const [salesDetails, setSalesDetails] = useState(mockDetails);
  const { idSale } = useParams();

  useMemo(() => {
    const sale = async (id) => {
      const saleDB = await getSale(id);
      setSalesDetails(mockDetails || saleDB);
    };
    sale(idSale);
  }, [idSale]);

  return (
    <div className="orderDetails-container">
      <NavBar />
      <h1>Detalhe do pedido</h1>

      <div>
        <h3>Pedido</h3>
        <h3 data-testid={ dataTestIds[37] }>{salesDetails.id}</h3>
        <p data-testid={ dataTestIds[38] }>{salesDetails.name_seller}</p>
        <h3 data-testid={ dataTestIds[39] }>{salesDetails.sale_date}</h3>
        <h3 data-testid={ dataTestIds[40] }>{salesDetails.status}</h3>
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
          {salesDetails.products.map((product, i) => (
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
        <span data-testid={ dataTestIds[46] }>{salesDetails.total_price}</span>
      </div>
    </div>
  );
}
