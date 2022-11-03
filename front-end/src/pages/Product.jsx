import React, { useState } from 'react';
import NavBar from '../components/Navbar';

export default function Product() {
  const [products] = useState([]);
  const [quantity, setQuantity] = useState(0);

  // componentDidMount

  /*   useEffect(async () => {
    // Estrutura da comunicação com API
    // const data = await fetch('[URL]').json();
    // setProducts(data);
  }, []); */

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
