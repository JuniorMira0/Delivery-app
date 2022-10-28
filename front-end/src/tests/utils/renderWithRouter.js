import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../redux/store';

const renderWithRouter = (path = '/login') => rtlRender(
  <MemoryRouter initialEntries={ [path] }>
    <Provider store={ store }>
      <App />
    </Provider>
  </MemoryRouter>,
);

export default renderWithRouter;
