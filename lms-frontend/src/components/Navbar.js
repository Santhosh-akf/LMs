import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default Navbar;