import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import MapPage from './pages/MapPage';

class App extends Component {
    state = {
        page: 'Login'
    }

    handleClick = (page) => {
        this.setState({
            page
        });
    }

    render() {
        const nav = [
            {
                name: 'Карта',
                link: 'Map'
            },
            {
                name: 'Профиль',
                link: 'Profile'
            },
            {
                name: 'Логин',
                link: 'Login'
            }
        ]

        return (
            <div className="app">
                <Header headerNav={nav} handleClick={this.handleClick} />

                {this.state.page === 'Login' && <LoginPage handleClick={this.handleClick} /> }
                {this.state.page === 'SignUp' && <SignUpPage /> }
                {this.state.page === 'Profile' && <ProfilePage /> }
                {this.state.page === 'Map' && <MapPage /> }
            </div>
        );
    }
}

export default App;
