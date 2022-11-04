import NavBar from '../components/Navbar';
import dataTestIds from '../utils/dataTestIds';

export default function SellerOrderDetails() {
  const salesDetails = {
    id: 1,
    status: 'pendente',
    sale_date: '01/11/22',
    name_seller: 'Fulaninho',
    total_price: 50.82,
    products: [
      { name: 'Skol Lata 250ml', quantity: 3, price: 3.5 },
      { name: 'Brahminha', quantity: 98, price: 2 },
    ],
  };

  return (
    <div>
      <NavBar />
      <h1>Detalhe do pedido</h1>

      <div>
        <h2>Pedido</h2>
        <span data-testid={ dataTestIds[53] }>{salesDetails.id}</span>
        <p data-testid={ dataTestIds[54] }>{salesDetails.status}</p>
        <h3 data-testid={ dataTestIds[55] }>{salesDetails.sale_date}</h3>
        <button type="button" data-testid={ dataTestIds[56] }>Preparar pedido</button>
        <button type="button" data-testid={ dataTestIds[57] }>Saiu para entrega</button>
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
          {salesDetails.products.map((product, index) => (
            <tr key={ index }>
              <td data-testid={ `${dataTestIds[58]}${i}` }>{index}</td>
              <td data-testid={ `${dataTestIds[59]}${i}` }>{product.name}</td>
              <td data-testid={ `${dataTestIds[60]}${i}` }>{product.quantity}</td>
              <td data-testid={ `${dataTestIds[61]}${i}` }>{product.price}</td>
              <td data-testid={ `${dataTestIds[62]}${i}` }>
                {product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total:</h2>
        <span data-testid={ dataTestIds[63] }>{salesDetails.total_price}</span>
      </div>
    </div>
  );
}
