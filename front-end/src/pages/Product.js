import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import getProducts from '../services/product';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const saveProducts = async () => {
      const data = await getProducts(token);

      setProducts([...data]);
    };
    saveProducts();
  }, []);

  const addItem = (price) => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + price);
  };

  const removeItem = (price) => {
    setQuantity(quantity - 1);
    setTotalPrice(totalPrice - price);
  };

  return (
    <div>
      <NavBar />
      {
        products.map((product) => {
          const { id, name, url_image: urlImage } = product;

          return (
            <div data-testid={ `customer_products__element-card-price-${id}` } key={ id }>
              <p>{ price }</p>
              <p>{ name }</p>
              <img src={ urlImage } alt={ name } />
              <span>
                <button
                  type="button"
                  onClick={ () => removeItem(price) }
                >
                  -
                </button>
                <input type="number" value={ quantity } />
                <button
                  type="button"
                  onClick={ () => addItem(price) }
                >
                  +
                </button>
              </span>
            </div>
          );
        })
      }
      <button
        type="button"
        onClick={ () => setQuantity(quantity - 1) }
      >
        -
      </button>
      <input type="number" value={ quantity } />
      <button
        type="button"
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
      <button
        onClick={ () => navigate('/customer/checkout') }
        type="button"
      >
        {`Ver carrinho: R$${totalPrice}`}

      </button>
    </div>
  );
}
