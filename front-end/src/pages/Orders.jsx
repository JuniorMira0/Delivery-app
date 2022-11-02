/* eslint-disable max-len */
import NavBar from '../components/Navbar';

export default function Orders() {
  const sales = [
    {
      id: 1,
      status: 'pendente',
      sale_date: '01/11/22',
      total_price: 25,
    },
    {
      id: 1,
      status: 'pendente',
      sale_date: '01/11/22',
      total_price: 25,
    },
    {
      id: 1,
      status: 'pendente',
      sale_date: '01/11/22',
      total_price: 25,
    },
  ];

  return (
    <div>
      <NavBar />
      {
        sales.map((sale) => {
          const { id, sale_date: saleDate, status, total_price: totalPrice } = sale;
          return (
            <div key={ id }>
              <p data-testid={ `customer_orders__element-order-id-${id}` }>
                Pedido
                <span>{ id }</span>
              </p>
              <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
                { status }
              </p>
              <p data-testid={ `customer_orders__element-order-date-${id}` }>
                { saleDate }
              </p>
              <span data-testid={ `customer_orders__element-card-price-${id}` }>
                { totalPrice }
              </span>
            </div>
          );
        })
      }

    </div>
  );
}
