import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '../AuthContext';

class LoginPage extends Component {
  static propTypes = {
    navigateTo: PropTypes.func,
  };

  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigateTo('profile');
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <main className="LoginPage container">
        {this.props.isLoggedIn ? (
          <p>
            You are logged in{' '}
            <button onClick={this.goToProfile}>go to profile</button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <h1>Войти</h1>
            <p>
              Новый пользователь?{' '}
              <button
                type="button"
                onClick={(e) => this.props.navigateTo('signUp')}
              >
                Зарегистрируйтесь
              </button>
            </p>

            <p>
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" type="text" name="email" />
            </p>

            <p>
              <label htmlFor="password">Пароль</label>
              <br />
              <input id="password" type="text" name="password" />
            </p>

            <p>
              <button type="submit">Войти</button>
            </p>
          </form>
        )}
      </main>
    );
  }
}

export default withAuth(LoginPage);
