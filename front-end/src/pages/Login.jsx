import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticationUser } from '../services/user';
import { actionUserLogin } from '../redux/userSlice';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState('');
  const [disabledBtnLogin, setDisableBtnLogin] = useState(true);
  const MIN_LENGTH_PASSWORD = 6;
  const NOT_FOUND = 404;
  const userStorage = JSON.parse(localStorage.getItem('user')) || 'notFound';

  useEffect(() => {
    const validateInputs = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      if (
        regexEmail.test(user.email)
        && user.password.length >= MIN_LENGTH_PASSWORD
      ) {
        return setDisableBtnLogin(false);
      }
      return setDisableBtnLogin(true);
    };
    validateInputs();
  }, [user]);

  useEffect(() => {
    if (userStorage.token) navigate('/customer/products');
  }, [userStorage.token, navigate]);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const newSession = async () => {
    try {
      const response = await authenticationUser(user);
      dispatch(actionUserLogin(response));
      localStorage.setItem('user', JSON.stringify(response));

      navigate('/');
    } catch (error) {
      if (error.response.status === NOT_FOUND) {
        return setAlert('Usuário não encontrado!');
      }
      setAlert('Aconteceu algum problema, tente novamente mais tarde!');
    }
  };

  return (
    <div className="login-container">
      <h1>Drinks Delivery</h1>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="common_login__input-email"
            onChange={ handleInput }
            value={ user.email }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
            onChange={ handleInput }
            value={ user.password }
          />
        </label>

        <button
          type="button"
          disabled={ disabledBtnLogin }
          data-testid="common_login__button-login"
          onClick={ newSession }
        >
          Login
        </button>
        <Link to="/register">
          <button type="button" data-testid="common_login__button-register">
            register
          </button>
        </Link>
        {alert && (
          <p data-testid="common_login__element-invalid-email">{alert}</p>
        )}
      </form>
    </div>
  );
}
