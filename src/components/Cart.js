import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Obtener los productos almacenados en el localStorage
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const handleRemoveItem = (index) => {
        // Eliminar un producto del carrito
        const updatedCart = cart.filter((_, i) => i !== index);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardar el carrito actualizado
        setCart(updatedCart); // Actualizar el estado local
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h2>Tu carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito esta vacio 😢</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <button onClick={() => handleRemoveItem(index)}>Borrar</button>
                            </li>
                        ))}
                    </ul>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <h3>Total: ${getTotal()}</h3>
                        <button onClick={() => alert('Proceeding to Checkout!')}>Ir a pagar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
