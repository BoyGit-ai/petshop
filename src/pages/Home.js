import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header className="home-header">
                <h1>Bienvenidos a PetShop "Jimmy"</h1>
                <p>La tienda online de confianza para todas tus mascotas</p>
            </header>
            <section className="home-benefits">
                <h2>¿Por qué elegirnos?</h2>
                <div className="benefit-list">
                    <div className="benefit-item">
                        <h3>Variedad de Productos</h3>
                        <p>Tenemos todo lo que tu mascota necesita, desde comida hasta juguetes y accesorios.</p>
                    </div>
                    <div className="benefit-item">
                        <h3>Envío Rápido</h3>
                        <p>Realizamos entregas rápidas para que tu mascota no se quede esperando.</p>
                    </div>
                    <div className="benefit-item">
                        <h3>Precios Competitivos</h3>
                        <p>Ofrecemos precios accesibles para que cuides de tu mascota sin preocupaciones.</p>
                    </div>
                </div>
            </section>

            <section className="home-pet-care-tips">
                <h2>Consejos para el Cuidado de tu Mascota</h2>
                <div className="tips-list">
                    <div className="tip-item">
                        <h3>Alimentación Balanceada</h3>
                        <p>Es importante ofrecer a tu mascota una dieta equilibrada. Consulta nuestras opciones de alimentos premium.</p>
                    </div>
                    <div className="tip-item">
                        <h3>Juguetes para el Desarrollo Mental</h3>
                        <p>Los juguetes no solo entretienen a tu mascota, sino que también estimulan su mente. Encuentra los mejores juguetes aquí.</p>
                    </div>
                    <div className="tip-item">
                        <h3>Cuidado Dental</h3>
                        <p>La salud dental es fundamental para tu mascota. Encuentra productos especializados en nuestra tienda.</p>
                    </div>
                </div>
            </section>

            <section className="home-newsletter">
                <h2>Suscríbete a Nuestro Boletín</h2>
                <p>Recibe noticias, ofertas especiales y consejos exclusivos sobre el cuidado de tus mascotas.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Ingresa tu email" />
                    <button type="submit">Suscribirme</button>
                </form>
            </section>

            <footer className="home-footer">
                <h3>Contáctanos</h3>
                <p>Ubicación: Calle Ficticia 123, Ciudad, País</p>
                <p>Email: contacto@petshop.com</p>
                <p>Teléfono: (123) 456-7890</p>
            </footer>
        </div>
    );
};

export default Home;
