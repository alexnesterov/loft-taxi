import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./pages/LoginPage', () => ({
  LoginPage: () => <div>Login content</div>,
}));

jest.mock('./pages/SignUpPage', () => ({
  LoginPage: () => <div>SignUp content</div>,
}));
jest.mock('./pages/MapPage', () => ({ MapPage: () => <div>Map content</div> }));
jest.mock('./pages/ProfilePage', () => ({
  ProfilePage: () => <div>Profile content</div>,
}));

describe('App', () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch('Login content');
  });

  // describe('when clicked on navigation buttons', () => {
  //   it('opens the corresponding page', () => {
  //     const { getByText, container } = render(<App isLoggedIn />);
  //     fireEvent.click(getByText('Map'));
  //     expect(container.innerHTML).toMatch('Map content');
  //     fireEvent.click(getByText('Profile'));
  //     expect(container.innerHTML).toMatch('Profile content');
  //   });
  // });
});
