import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Product from '../components/Product';
import getProducts from '../services/product';

export default function Products() {
  const [products, setProducts] = useState([]);
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

  const checkoutPage = () => {
    if (totalPrice > 0) {
      navigate('/customer/checkout');
    }
  };

  return (
    <div>
      <NavBar />
      {
        products.map((product) => (
          <Product
            key={ product.id }
            product={ product }
            totalPriceFunc={ setTotalPrice }
            totalPrice={ totalPrice }
          />
        ))
      }
      <button
        onClick={ () => checkoutPage() }
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalPrice.toFixed(2).replace('.', ',')}
      </button>
    </div>
  );
}
