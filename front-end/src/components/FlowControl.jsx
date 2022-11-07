import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function FlowControl({ children }) {
  const user = JSON.parse(localStorage.getItem('user')) || null;

  if (!user) {
    return <Navigate to="/login" />;
  }

  switch (user.role) {
  case 'customer':
    return <Navigate to="/customer/products" />;
  case 'seller':
    return <Navigate to="/seller/orders" />;
  default:
    return children;
  }
}

FlowControl.propTypes = {
  props: PropTypes.object,
}.isRequired;

export default FlowControl;
