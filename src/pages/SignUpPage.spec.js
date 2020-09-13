import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';

describe('SignUpPage', () => {
    it('renders correctly', () => {
        const { getByLabelText } = render(<SignUpPage />);

        expect(getByLabelText('Адрес электронной почты')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Имя')).toHaveAttribute('name', 'name');
        expect(getByLabelText('Фамилия')).toHaveAttribute('name', 'surname');
        expect(getByLabelText('Пароль')).toHaveAttribute('name', 'password');
    })
})