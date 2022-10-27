import NavBar from './components/Navbar';

export default function Product() {
  const [products, setProducts] = useState([]);

  // componentDidMount
  useEffect(async () => {
    // Estrutura da comunicação com API
    /*
      const data = await fetch('[URL]').json();
      setProducts(data);
    */
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
              <button type="button">-</button>
              <input type="number" placeholder="0" />
              <button type="button">+</button>
            </div>
          );
        })
      }
    </div>
  );
}
