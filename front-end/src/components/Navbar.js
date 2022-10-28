export default function NavBar() {
  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <li data-testid="customer_products__element-navbar-link-products">
        <a href="#t">Produtos</a>
      </li>
      <li data-testid="customer_products__element-navbar-link-orders">
        <a href="#t">Meus pedidos</a>
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        <a href="#t">{ name }</a>
      </li>
      <li data-testid="customer_products__element-navbar-link-logout">
        <a href="#t">Sair</a>
      </li>
    </nav>
  );
}
