import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { newRegister } from '../services/user';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [alert, setAlert] = useState('');
  const [disabledBtnLogin, setDisableBtnLogin] = useState(true);
  const MIN_LENGTH_PASSWORD = 6;
  const MIN_LENGTH_NAME = 12;
  const CONFLIT = 409;

  useEffect(() => {
    const validateInputs = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      if (regexEmail.test(user.email) && user.password.length >= MIN_LENGTH_PASSWORD
      && user.name.length >= MIN_LENGTH_NAME) {
        return setDisableBtnLogin(false);
      }
      return setDisableBtnLogin(true);
    };
    validateInputs();
  }, [user]);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const newAccount = async () => {
    try {
      await newRegister(user);
      navigate('/customer/products');
    } catch (error) {
      if (error.response.status === CONFLIT) {
        return setAlert('Usuário já cadastrado!');
      }
      setAlert('Aconteceu algum problema, tente novamente mais tarde!');
    }
  };

  return (
    <div className="Register-container">
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ handleInput }
            value={ user.name }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            data-testid="common_register__input-email"
            onChange={ handleInput }
            value={ user.email }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="text"
            name="password"
            data-testid="common_register__input-password"
            onChange={ handleInput }
            value={ user.password }
          />
        </label>

        <button
          type="button"
          disabled={ disabledBtnLogin }
          data-testid="common_register__button-register"
          onClick={ newAccount }
        >
          Cadastrar
        </button>
        <Link to="/login">Já tenho uma conta</Link>
        {alert && <p data-testid="common_register__element-invalid_register">{alert}</p>}
      </form>
    </div>
  );
}
