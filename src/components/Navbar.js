import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>PetShop "Jimmy"</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalogo</Link></li>
                <li><Link to="/cart">Carrito</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
