import React, { Component } from 'react';
import { withAuth } from '../AuthContext';

class ProfilePage extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigateTo('login');
  };

  render() {
    return (
      <main className="ProfilePage">
        Profile Page
        <button type="button" onClick={this.unauthenticate}>
          Выйти
        </button>
      </main>
    );
  }
}

export default withAuth(ProfilePage);
