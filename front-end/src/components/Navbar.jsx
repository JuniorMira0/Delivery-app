export default function NavBar() {
  const { name, role } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
  };

  return (
    <nav>
      {role === 'customer' && (
        <li data-testid="customer_products__element-navbar-link-products">
          <a href="#t">Produtos</a>
        </li>)}
      <li data-testid="customer_products__element-navbar-link-orders">
        <a href={ role === 'customer' ? '/customer/orders' : '/seller/orders' }>
          {role === 'customer' ? 'Meus pedidos' : 'Pedidos'}
        </a>
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        <a href="#t">{ name }</a>
      </li>
      <li data-testid="customer_products__element-navbar-link-logout">
        <a href="/login" onClick={ () => logout() }>Sair</a>
      </li>
    </nav>
  );
}
