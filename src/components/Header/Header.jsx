import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='bg-yellow-600 py-3 '>
            
                <Link to="/" className='hover:text-white mr-3'>Home</Link>
                <Link to="/review" className='hover:text-white mr-3'>Order Review</Link>
                <Link to="/about" className='hover:text-white mr-3'>About</Link>
                <Link to="/grandpa" className='hover:text-white mr-3'>Grandpa</Link>
                <Link to="/contact" className='hover:text-white mr-3'>Contact</Link>
            
        </nav>
    );
};

export default Header;