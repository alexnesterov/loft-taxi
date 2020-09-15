import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import MapPage from './pages/MapPage';

class App extends Component {
  state = {
    currentPage: 'login',
  };

  navigateTo = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    return (
      <div className="app">
        <Header navigateTo={this.navigateTo} />

        {this.state.currentPage === 'login' && (
          <LoginPage navigateTo={this.navigateTo} />
        )}
        {this.state.currentPage === 'signUp' && (
          <SignUpPage navigateTo={this.navigateTo} />
        )}
        {this.state.currentPage === 'profile' && <ProfilePage />}
        {this.state.currentPage === 'map' && <MapPage />}
      </div>
    );
  }
}

export default App;
