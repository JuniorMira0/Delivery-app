import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';

export default function Orders() {
  const navigate = useNavigate();
  const sales = [
    {
      id: 1,
      status: 'pendente',
      sale_date: '01/11/22',
      total_price: 25,
      address: 'Rua irmãos Monteiro',
    },
    {
      id: 1,
      status: 'pendente',
      sale_date: '01/11/22',
      total_price: 25,
      address: 'Rua Vila Bela',
    },
    {
      id: 1,
      status: 'pendente',
      sale_date: '01/11/22',
      total_price: 25,
      address: 'Rua Sessenta e Dois',
    },
  ];

  return (
    <div>
      <NavBar />
      {
        sales.map((sale) => {
          const { id, sale_date: saleDate,
            status, total_price: totalPrice, address } = sale;
          return (
            <button
              type="button"
              key={ id }
              onClick={ () => navigate(`/customer/orders/${id}`) }
            >
              <p data-testid={ `seller_orders__element-order-id-${id}` }>
                Pedido
                <span>{ id }</span>
              </p>
              <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
                { status }
              </p>
              <p data-testid={ `seller_orders__element-order-date-${id}` }>
                { saleDate }
              </p>
              <span data-testid={ `seller_orders__element-card-price-${id}` }>
                { totalPrice }
              </span>
              <p data-testid={ `seller_orders__element-card-address-${id}` }>
                { address }
              </p>
            </button>
          );
        })
      }

    </div>
  );
}
