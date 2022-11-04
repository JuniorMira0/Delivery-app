export default function NavBar() {
  const { name, role } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
  };

  return (
    <nav>
      {role === 'customer' && (
        <li>
          <a
            href="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </a>
        </li>
      )}
      <li>
        <a
          href={ role === 'customer' ? '/customer/orders' : '/seller/orders' }
          data-testid="customer_products__element-navbar-link-orders"
        >
          {role === 'customer' ? 'Meus pedidos' : 'Pedidos'}
        </a>
      </li>
      <li>
        <a
          data-testid="customer_products__element-navbar-user-full-name"
          href="#t"
        >
          {name}
        </a>
      </li>
      <li>
        <a
          data-testid="customer_products__element-navbar-link-logout"
          href="/login"
          onClick={ () => logout() }
        >
          Sair
        </a>
      </li>
    </nav>
  );
}
