import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Header.css';
import Nav from '../Nav/Nav.js';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">Job Tracker</h1>
      </Link>
      <Nav className="nav" />
    </div>
  )
};

export default Header;