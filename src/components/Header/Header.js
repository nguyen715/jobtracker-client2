import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">Job Tracker</h1>
      </Link>
    </div>
  )
};

export default Header;