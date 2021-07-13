import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <span className="filter" title="미구현입니다">
                Filter Option
            </span>
        </div>
    );
}

export default Navigation;