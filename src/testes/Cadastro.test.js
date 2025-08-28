import { render, screen, fireEvent } from '@testing-library/react';
import Registro from '../pages/Registro';

test('Verifica se os componentes são visíveis.', () => {
  render(<Registro />);

  const nameInput = screen.getByLabelText('Nome');
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Senha');
  const buttonRegister = screen.getByRole('button', { name: /cadastrar/i });

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(buttonRegister).toBeInTheDocument();
});

test('Verifica se é possível escrever nos inputs.', () => {
  render(<Registro />);

  const nameInput = screen.getByLabelText('Nome');
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Senha');

  fireEvent.change(nameInput, { target: { value: 'Breno' } });
  fireEvent.change(emailInput, { target: { value: 'breno@email.com' } });
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  expect(nameInput.value).toBe('Breno');
  expect(emailInput.value).toBe('breno@email.com');
  expect(passwordInput.value).toBe('123456');
});

test('Verifica se o botão de cadastrar está desabilitado quando os campos estão vazios.', () => {
  render(<Registro />);

  const buttonRegister = screen.getByRole('button', { name: /cadastrar/i });
  expect(buttonRegister).toBeDisabled();
});

test('Verifica se o botão de cadastrar está habilitado quando os campos estão preenchidos.', () => {
  render(<Registro />);

  const nameInput = screen.getByLabelText('Nome');
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Senha');
  const buttonRegister = screen.getByRole('button', { name: /cadastrar/i });

  fireEvent.change(nameInput, { target: { value: 'Breno' } });
  fireEvent.change(emailInput, { target: { value: 'breno@email.com' } });
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  expect(buttonRegister).toBeEnabled();
});

test('Verifica se ao clicar no botão de cadastrar, a mensagem de cadastro é exibida.', () => {
  render(<Registro />);

  const nameInput = screen.getByLabelText('Nome');
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Senha');
  const buttonRegister = screen.getByRole('button', { name: /cadastrar/i });

  fireEvent.change(nameInput, { target: { value: 'Breno' } });
  fireEvent.change(emailInput, { target: { value: 'breno@email.com' } });
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  fireEvent.click(buttonRegister);
  const registerMessage = screen.getByText(/cadastro realizado com sucesso!/i);
  expect(registerMessage).toBeInTheDocument(); 
});