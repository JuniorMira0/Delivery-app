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
        <a href="#t">{role === 'customer' ? 'Meus pedidos' : 'Pedidos'}</a>
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        <a href="#t">{name}</a>
      </li>
      <li>
        <a
          href="/login"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          Sair
        </a>
      </li>
    </nav>
  );
}
