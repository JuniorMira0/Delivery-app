import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveItem, selectProduct } from '../redux/userProducts';

export default function CarShop() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  const removeItemInShopCar = (index) => {
    dispatch(actionRemoveItem(index));
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2).replace('.', ',');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor unitário</td>
            <td>Subtotal</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <thead>
          {products.map((product, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {product.price.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {String((product.quantity * product.price).toFixed(2)).replace('.', ',')}
              </td>
              <button
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                type="button"
                onClick={ () => removeItemInShopCar(index) }
              >
                Remover

              </button>
            </tr>
          ))}
        </thead>
      </table>

      <h2
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: R$ ${totalPrice()}`}
      </h2>
    </div>
  );
}
