import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/Navbar';
import { selectToken } from '../redux/userSlice';
import getProducts from '../services/product';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const { token } = useSelector(selectToken);

  useEffect(() => {
    const saveProducts = async () => {
      const data = await getProducts(token);

      setProducts([...data]);
    };
    saveProducts();
  }, []);

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
              </span>
            </div>
          );
        })
      }
    </div>
  );
}
