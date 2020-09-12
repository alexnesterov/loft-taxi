import React from 'react';

const Header = ({headerNav, handleClick}) => {
    return (
        <div className="header">
            <h1 className="header__title">LoftTaxi</h1>
            <ul className="nav">
                {headerNav.map((item, index) =>
                <li className="nav__item" key={index}>
                    <button className="nav__link" onClick={(e) => handleClick(item.link)}>{item.name}</button>
                </li>
                )}
            </ul>
        </div>
    );
};

export default Header;