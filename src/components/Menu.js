import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem',
  };
  return (
    <div>
      {/*  ***Link*** */}
      {/*
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/foo">About Foo</Link>
        </li>
      </ul> */}
      {/* ***NaveLink*** */}
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/foo" activeStyle={activeStyle}>
            About Foo
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeStyle={activeStyle}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeStyle={activeStyle}>
            history
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;
