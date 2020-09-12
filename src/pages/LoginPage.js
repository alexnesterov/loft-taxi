import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <form>
                    <h1>Войти</h1>
                    <p>Новый пользователь? <button onClick={e => this.props.handleClick('SignUp')}>Зарегистрируйтесь</button></p>
                    <p><input type="text" placeholder="имя пользователя*" /></p>
                    <p><input type="password" placeholder="пароль*" /></p>
                    <p><button type="submit">Войти</button></p>
                </form>
            </div>
        );
    }
}

export default LoginPage;