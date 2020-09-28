import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import MapPage from './pages/MapPage';
import { withAuth } from './AuthContext';

const PAGES = {
  login: (props) => <LoginPage {...props} />,
  map: (props) => <MapPage {...props} />,
  profile: (props) => <ProfilePage {...props} />,
  signUp: (props) => <SignUpPage {...props} />,
};

const nav = [
  {
    name: 'Карта',
    link: 'map',
  },
  {
    name: 'Профиль',
    link: 'profile',
  },
  {
    name: 'Логин',
    link: 'login',
  },
];

class App extends Component {
  state = {
    currentPage: 'login',
  };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: 'login' });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="header__title">LoftTaxi</h1>
          <ul className="nav">
            {nav.map((item, index) => (
              <li className="nav__item" key={item.link}>
                <button
                  className="nav__link"
                  onClick={() => this.navigateTo(item.link)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {PAGES[this.state.currentPage]({ navigateTo: this.navigateTo })}
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default withAuth(App);
