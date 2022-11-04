import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserSalles } from '../services/user';

export default function CheckoutDetails({ props }) {
  const [userSelles, setUserSelles] = useState([]);
  const { infos, setInfos } = props;

  const handdleInput = ({ target }) => {
    setInfos({ ...infos, [target.name]: target.value });
  };

  useEffect(() => {
    const getSelles = async () => {
      const response = await getUserSalles();
      setUserSelles(response.data);
    };
    getSelles();
  }, []);

  return (
    <div>
      <h3>Detalhes e Endereços para Entrega</h3>
      <label htmlFor="sale">
        P. Vendedora Responsável
        <select
          data-testid="customer_checkout__select-seller"
          onChange={ handdleInput }
          name="seller"
        >
          <option>Escolha um vendedor</option>
          {userSelles
            && userSelles.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {seller.name}
              </option>
            ))}
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          onChange={ handdleInput }
          name="deliveryAddress"
          value={ userSelles.deliveryAddress }
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          data-testid="customer_checkout__input-address-number"
          type="text"
          onChange={ handdleInput }
          name="deliveryNumber"
          value={ userSelles.deliveryNumber }
        />
      </label>
    </div>
  );
}

CheckoutDetails.propTypes = {
  props: PropTypes.object,
}.isRequired;
