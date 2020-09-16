// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import App from './App';

// jest.mock('./pages/LoginPage', () => ({ LoginPage: () => <div>Login Page component</div>}))
// jest.mock('./pages/MapPage', () => ({ MapPage: () => <div>Map Page component</div>}))
// jest.mock('./pages/ProfilePage', () => ({ ProfilePage: () => <div>Profile Page component</div>}))
// jest.mock('./pages/SignUpPage', () => ({ SignUpPage: () => <div>SignUp Page component</div>}))

// describe('App', () => {
//   it('renders correctly', () => {
//     const { container } = render(<App />);
//     expect(container.innerHTML).toMatch('Login Page component');
//   });

//   describe('when clicked on navigation buttons', () => {
//     it('opens the corresponding page', () => {
//       const { getByText, container } = render(<App />);

//       fireEvent.click(getByText('Логин'));
//       expect(container.innerHTML).toMatch('Login Page component');

//       fireEvent.click(getByText('Профиль'));
//       expect(container.innerHTML).toMatch('Profile Page component');

//       fireEvent.click(getByText('Карта'));
//       expect(container.innerHTML).toMatch('Map Page component');
//     });
//   });
// });
