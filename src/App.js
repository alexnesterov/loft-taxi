import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Header from './components/Header';

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
        <Header navigateTo={this.navigateTo} />
        {PAGES[this.state.currentPage]({ navigateTo: this.navigateTo })}
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default withAuth(App);
