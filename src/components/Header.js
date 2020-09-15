import React from 'react';

const Header = ({ navigateTo }) => {
  const nav = [
    {
      name: 'Карта',
      link: 'map',
    },
    {
      name: 'Профиль',
      link: 'profile',
    },
    {
      name: 'Логин',
      link: 'login',
    },
  ];

  return (
    <div className="header">
      <h1 className="header__title">LoftTaxi</h1>
      <ul className="nav">
        {nav.map((item, index) => (
          <li className="nav__item" key={item.link}>
            <button
              className="nav__link"
              onClick={(e) => navigateTo(item.link)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
