/* eslint-disable max-len */
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import dataTestIds from '../utils/dataTestIds';

export default function OrderCustomer() {
  const navigate = useNavigate();
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
            <button
              type="button"
              key={ id }
              onClick={ () => navigate(`/customer/orders/${id}`) }
            >
              <p data-testid={ `${dataTestIds[33]}${id}` }>
                Pedido
                <span>{ id }</span>
              </p>
              <p data-testid={ `${dataTestIds[34]}${id}` }>
                { status }
              </p>
              <p data-testid={ `${dataTestIds[35]}${id}` }>
                { saleDate }
              </p>
              <span data-testid={ `${dataTestIds[36]}${id}` }>
                { totalPrice }
              </span>
            </button>
          );
        })
      }

    </div>
  );
}
