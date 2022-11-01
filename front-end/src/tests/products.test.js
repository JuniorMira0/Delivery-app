/* eslint-disable max-len */
import { screen } from '@testing-library/react';

import renderWithRouter from './utils/renderWithRouter';

describe('Testa o correto funcionamento da pagina de Products', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Verifica os botoões do cabeçalho existem', () => {
    renderWithRouter('/customer/products');
    const btnProducts = screen.getByTestId('customer_products__element-navbar-link-products');
    const btnOrders = screen.getByTestId('customer_products__element-navbar-link-orders');
    const btnName = screen.getByTestId('customer_products__element-navbar-user-full-name');
    const btnLogout = screen.getByTestId('customer_products__element-navbar-link-logout');

    expect(btnProducts).toBeInTheDocument(btnProducts);
    expect(btnOrders).toBeInTheDocument(btnOrders);
    expect(btnName).toBeInTheDocument(btnName);
    expect(btnLogout).toBeInTheDocument(btnLogout);
  });
});
