import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  static propTypes = {
    navigateTo: PropTypes.func,
  };

  render() {
    return (
      <main className="LoginPage container">
        <form method="POST">
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
            <label htmlFor="username">Имя пользователя</label>
            <br />
            <input id="username" type="text" name="username" />
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
      </main>
    );
  }
}

export default LoginPage;
