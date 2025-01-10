import React from 'react';

const Checkout = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Total: ${total}</h2>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <button type="submit">Realizar pedido</button>
            </form>
        </div>
    );
};

export default Checkout;
