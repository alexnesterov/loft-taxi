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

  renderPage = (page) => {
    switch (page) {
      case 'login':
        return <LoginPage navigateTo={this.navigateTo} />;
      case 'signUp':
        return <SignUpPage navigateTo={this.navigateTo} />;
      case 'profile':
        return <ProfilePage />;
      case 'map':
        return <MapPage />;
      default:
        return <LoginPage navigateTo={this.navigateTo} />;
    }
  };

  render() {
    return (
      <div className="app">
        <Header navigateTo={this.navigateTo} />
        {this.renderPage(this.state.currentPage)}
      </div>
    );
  }
}

export default App;
