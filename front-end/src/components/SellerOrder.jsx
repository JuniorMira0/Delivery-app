import moment from 'moment';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dataTestIds from '../utils/dataTestIds';

export default function SellerOrder(props) {
  const navigate = useNavigate();
  const { order } = props;
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = order;

  return (
    <div>
      <button
        type="button"
        onClick={ () => navigate(`/seller/orders/${id}`) }
        data-testid={ `${dataTestIds[48]}${id}` }
      >
        <p>{`Pedido ${id}`}</p>
        <div data-testid={ `${dataTestIds[49]}${id}` }>{status}</div>
        <div>
          <p data-testid={ `${dataTestIds[50]}${id}` }>
            {moment(new Date(saleDate)).format('DD/MM/YYYY')}
          </p>
          <p data-testid={ `${dataTestIds[51]}${id}` }>{totalPrice}</p>
        </div>
        <p data-testid={ `${dataTestIds[52]}${id}` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </p>
      </button>
    </div>
  );
}

SellerOrder.propTypes = {
  order: PropTypes.object,
}.isRequired;
