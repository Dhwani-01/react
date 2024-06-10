import React from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.jpg';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login-signup');
    }

    return (
        <div className='navbar'>
            <ul className="nav-menu">
                <li>Shop</li>
            </ul>
            <div className="nav-login-cart">
                <button onClick={handleLoginClick}>Sign Up</button> 
                <button>Cart</button>
                <button>Cart</button>
                <img src={cart_icon} alt="cart"/>
            </div>
        </div>
    );
}

export default Navbar;
