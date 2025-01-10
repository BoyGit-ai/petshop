import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    // Función para agregar al carrito
    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Alerta cuando el producto es agregado al carrito
        alert(`¡${product.name} ha sido agregado al carrito!`);
    };

    return (
        <div>
            <h2>Catálogo de Productos</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
