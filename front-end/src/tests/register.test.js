/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-func/max-lines-per-function */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockUser, passwordValid, errorConflit } from './mocks/user.mock';

import renderWithRouter from './utils/renderWithRouter';

const mockApi = require('../services/user');

describe('Testa o correto funcionamento da pagina de Register', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it(`Verifica se input de nome existe e 
  ao digitar "teste" o mesmo é atualizado `, () => {
    renderWithRouter('/register');
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue('');
    userEvent.type(inputName, 'teste');
    expect(inputName).toHaveValue('teste');
  });
  it(`Verifica se input de email existe e 
  ao digitar "teste" o mesmo é atualizado `, () => {
    renderWithRouter('/register');
    const inputEmail = screen.getByTestId('common_register__input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'teste');
    expect(inputEmail).toHaveValue('teste');
  });
  it(`Verifica se input de senha existe e 
  ao digitar "teste" o mesmo é atualizado `, () => {
    renderWithRouter('/register');
    const inputPassword = screen.getByTestId('common_register__input-email');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');
    userEvent.type(inputPassword, 'teste');
    expect(inputPassword).toHaveValue('teste');
  });
  it(`Verifica se a propriedade disabled do 
  botão é true quando dados de input estão invalidos`, () => {
    renderWithRouter('/register');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const buttonRegister = screen.getByRole('button', { name: 'Cadastrar' });
    userEvent.type(inputEmail, 'emailInvalido');
    userEvent.type(inputPassword, 'inv');
    expect(buttonRegister).toBeDisabled();
  });
  it(`Verifica se a propriedade disabled do 
  botão é false quando dados de input estão validos`, () => {
    renderWithRouter('/register');
    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const buttonRegister = screen.getByRole('button', { name: 'Cadastrar' });
    userEvent.type(inputName, 'teste teste testesd teste');
    userEvent.type(inputEmail, mockUser.email);
    userEvent.type(inputPassword, passwordValid);
    expect(buttonRegister).not.toBeDisabled();
  });
  it('Verifica se Cadastro é feito com sucesso', async () => {
    jest.spyOn(mockApi, 'newRegister');
    mockApi.newRegister.mockReturnValue();
    renderWithRouter('/register');
    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const buttonRegister = screen.getByRole('button', { name: 'Cadastrar' });
    userEvent.type(inputName, 'teste teste testes teste');
    userEvent.type(inputEmail, mockUser.email);
    userEvent.type(inputPassword, passwordValid);
    userEvent.click(buttonRegister);
    expect(mockApi.newRegister).toBeCalled();
    expect(mockApi.newRegister)
      .toHaveBeenCalledWith(
        { name: 'teste teste testes teste',
          email: mockUser.email,
          password: passwordValid },
      );
    expect(await screen.findByRole('button', { name: /login/i }));
  });
  it('Verifica se retorna um alerta ao cadastro ser inválido', async () => {
    jest.spyOn(mockApi, 'newRegister');
    mockApi.newRegister.mockRejectedValue(errorConflit);
    renderWithRouter('/register');
    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const buttonRegister = screen.getByRole('button', { name: 'Cadastrar' });
    userEvent.type(inputName, 'teste teste teste teste');
    userEvent.type(inputEmail, mockUser.email);
    userEvent.type(inputPassword, passwordValid);
    userEvent.click(buttonRegister);
    const alert = await screen.findByText('Usuário já cadastrado!');
    expect(alert).toBeInTheDocument();
  });
});
