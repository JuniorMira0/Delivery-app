import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddProduct, actionUpdateProduct } from '../redux/userProducts';

export default function Product(props) {
  const { product, totalPrice, totalPriceFunc } = props;
  const { id, name, urlImage, price } = product;
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const modifyProductSaved = (currentQuantity, productSaved) => {
    if (currentQuantity === 0) {
      // let indexProduct;
      // products.forEach((data, index) => {
      //   if (data.name === productSaved.name) {
      //     indexProduct = index;
      //   }
      // });
      // const copyProducts = [...products];
      // console.log(copyProducts);

      // const productRemoved = copyProducts.splice(1, indexProduct);
      // console.log(productRemoved);

      return products.filter((prod) => prod.name !== productSaved.name);
    }

    const productUpdated = products.map((data) => {
      const dataToSave = data.name === name
        ? { ...data, quantity: currentQuantity } : data;
      return dataToSave;
    });

    return productUpdated;
  };

  const saveItems = (currentQuantity) => {
    const productSaved = products.find(({ name: nameSaved }) => nameSaved === name);

    if (!productSaved) {
      const productCartData = { name, price, quantity: currentQuantity };
      dispatch(actionAddProduct(productCartData));
    } else {
      const productUpdated = modifyProductSaved(currentQuantity, productSaved);
      dispatch(actionUpdateProduct(productUpdated));
    }
  };

  const addItem = (priceProduct) => {
    setQuantity(quantity + 1);
    totalPriceFunc(totalPrice + Number(priceProduct));

    saveItems(quantity + 1);
  };

  const removeItem = (priceProduct) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      totalPriceFunc(totalPrice - Number(priceProduct));
      saveItems(quantity - 1);
    }
  };

  const defineQuantity = async ({ target }, priceProduct) => {
    if (target.value < 0) {
      target.value = 0;
    }

    const addTotal = totalPrice
      + (target.value * Number(priceProduct) - (quantity * Number(priceProduct)));
    totalPriceFunc(addTotal);
    setQuantity(Number(target.value));

    saveItems(target.value);
  };

  return (
    <div key={ id }>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace('.', ',')}
      </p>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        width="240px"
      />
      <span>
        <button
          type="button"
          onClick={ () => removeItem(price) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="number"
          value={ quantity }
          min="0"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => defineQuantity(e, price) }
        />
        <button
          type="button"
          onClick={ () => addItem(price) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </span>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
}.isRequired;
