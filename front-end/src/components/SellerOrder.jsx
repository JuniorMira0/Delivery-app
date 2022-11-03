import PropTypes from 'prop-types';
import dataTestIds from '../utils/dataTestIds';

export default function SellerOrder(props) {
  const { order } = props;
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = order;

  return (
    <div>
      <p data-testid={ `${dataTestIds[48]}${id}` }>{`Pedido ${id}`}</p>
      <div data-testid={ `${dataTestIds[49]}${id}` }>{status}</div>
      <div>
        <p data-testid={ `${dataTestIds[50]}${id}` }>{saleDate}</p>
        <p data-testid={ `${dataTestIds[51]}${id}` }>{totalPrice}</p>
      </div>
      <p data-testid={ `${dataTestIds[52]}${id}` }>
        {`${deliveryAddress}, ${deliveryNumber}`}
      </p>
    </div>
  );
}

SellerOrder.propTypes = {
  order: PropTypes.object,
}.isRequired;
