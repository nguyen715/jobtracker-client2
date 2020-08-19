import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {

  return (
    <div className="nav">
          <Link to="/jobs" className="jobs">Job List</Link>
    </div>
  )
};
