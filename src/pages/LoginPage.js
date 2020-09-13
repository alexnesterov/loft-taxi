import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <main className="LoginPage container">
                <form method="POST">
                    <h1>Войти</h1>
                    <p>Новый пользователь? <button type="button" onClick={e => this.props.navigateTo('signUp')}>Зарегистрируйтесь</button></p>
                    <p><input type="text" placeholder="имя пользователя*" /></p>
                    <p><input type="password" placeholder="пароль*" /></p>
                    <p><button type="submit">Войти</button></p>
                </form>
            </main>
        );
    }
}

export default LoginPage;