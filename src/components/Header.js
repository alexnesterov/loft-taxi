import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, navigateTo }) => {
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
      <h1 className="header__title">{title}</h1>
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

Header.propTypes = {
  title: PropTypes.string,
  navigateTo: PropTypes.func.isRequired,
};

Header.defaultProps = {
  title: 'LoftTaxi',
};

export default Header;
