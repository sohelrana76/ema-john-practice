import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            <div className="search">
                <input className="form-control" type="text" placeholder="type her to search"/>
                <span className="shoppingcart"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </div>
        </div>
    );
};

export default Header;