import React, { Component } from 'react';

class SignUpPage extends Component {
    render() {
        return (
            <div className="SignUpPage container">
                <form method="POST">
                    <h1>Регистрация</h1>
                    <p>Уже зарегистрирован? <button type="button" onClick={e => this.props.handleClick('Login')}>Войти</button></p>
                    <p>
                        <label htmlFor="email">Адрес электронной почты</label>
                        <br/>
                        <input id="email" type="text" name="email" />
                    </p>
                    <p>
                        <label htmlFor="name">Имя</label>
                        <br/>
                        <input id="name" type="text" name="name" />
                    </p>
                    <p>
                        <label htmlFor="surname">Адрес электронной почты</label>
                        <br/>
                        <input id="surname" type="text" name="surname" />
                    </p>
                    <p>
                        <label htmlFor="password">Пароль</label>
                        <br/>
                        <input id="password" type="password" name="password" />
                    </p>
                    <p><button type="submit">Зарегистрироваться</button></p>
                </form>
            </div>
        );
    }
}

export default SignUpPage;