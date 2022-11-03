import PropTypes from 'prop-types';

export default function SellerOrder(props) {
  const { order } = props;
  const { id, status, data, preco, endereco } = order;

  return (
    <div>
      <p data-testid={ `seller_orders__element-order-id-${id}` }>{`Pedido ${id}`}</p>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>{status}</div>
      <div>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>{data}</p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>{preco}</p>
      </div>
      <p data-testid={ `seller_orders__element-card-address-${id}` }>{endereco}</p>
    </div>
  );
}

SellerOrder.propTypes = {
  order: PropTypes.object,
}.isRequired;
