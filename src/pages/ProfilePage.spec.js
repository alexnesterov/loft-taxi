import React from 'react';
import { render } from '@testing-library/react';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
    it('renders correctly', () => {
        const { container } = render(<ProfilePage />);
        expect(container.innerHTML).toMatch('Profile Page');
    })
})