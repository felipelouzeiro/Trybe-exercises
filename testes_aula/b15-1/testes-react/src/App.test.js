    // App.test.js
    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import App from './App';

    test('Verificando se existe o campo Email.', () => {
      //acessa o elemento
      const { getByLabelText } = render(<App />);
      const inputEmail = getByLabelText('Email');
      //faz os testes
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail.type).toBe('email');
    });

    test('Verificando se existe dois botões', () => {
      //acessa o elemento
      const { getAllByRole } = render(<App />);
      const btn = getAllByRole('button');
      //faz os testes
      expect(btn.length).toBe(2);
    });

    test('Verifica se existe um botão "Enviar"', () => {
      //acessa o elemento
      const { getByTestId } = render(<App />);
      const btnSubmit = getByTestId('id-send')
      //faz os testes
      expect(btnSubmit).toHaveValue('Enviar')
      expect(btnSubmit.type).toBe('button')
    })

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});