import React from 'react';
import { render } from '@testing-library/react';
import MapPage from './MapPage';

describe('MapPage', () => {
    it('renders correctly', () => {
        const { container } = render(<MapPage />);
        expect(container.innerHTML).toMatch('Map Page');
    })
})