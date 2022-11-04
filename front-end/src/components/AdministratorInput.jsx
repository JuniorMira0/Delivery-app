import React, { useState, useEffect } from 'react';
import dataTestIds from '../utils/dataTestIds';

export default function RegisterForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [role, setRole] = useState('');
  const MIN_LENGTH_PASSWORD = 6;
  const MIN_LENGTH_NAME = 12;

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const validateForm = () => !(
    userName.length >= MIN_LENGTH_NAME
    && validateEmail(userEmail)
    && userPassword.length >= MIN_LENGTH_PASSWORD
    && role !== ''
  );

  buttonRegister = async () => {
    const url = 'http://localhost:3001/admin/manage';
    const data = JSON.parse(localStorage.getItem('user'));
    const request = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: data.token,
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
        role,
      }),
    };
    await fetch(url, request)
  }

  return (
    <div>
      <label htmlFor='name'>
        Nome
        <input
        data-testid={ `${dataTestIds[64]}` }
        placeholder='Nome'
        type='text'
        id='name'
        onChange={ ({ target }) => setUserName(target.value)}
        />
      </label>

      <label htmlFor='email'>
        Login
        <input
        data-testid={ `${dataTestIds[65]}`}
        placeholder='Ex: your@email.com'
        type='email'
        id='email'
        onChange={ ({ target }) => setUserEmail(target.value)}
        />
      </label>

      <label htmlFor='password'>
        Senha
        <input
        data-testid={ `${dataTestIds[66]}`}
        placeholder='******'
        type='password'
        id='password'
        onChange={ ({ target }) => setUserPassword(target.value)}
        />
      </label>

      <label htmlFor='user-type'>
        Tipo
        <select
        id='user-type'
        data-testid={ `${dataTestIds[68]}`}
        defaultValue=''
        onChange={ ({ target }) => setRole(target.value)}
        >
          <option value='' disabled hidden>Escolha o tipo</option>
          <option value='custumer'>Consumidor</option>
          <option value='seller'>Vendedor</option>
          <option value='administrator'>Administrador</option>
        </select>
      </label>

      <button
      type='button'
      data-testid={ `${dataTestIds[67]}`}
      disabled={ validateForm() }
      onClick={ buttonRegister }
      >
        Cadastrar
      </button>
    </div>
  )
}