import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('Email')).toHaveAttribute(
      'name',
      'email'
    );
    expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
  });
});
