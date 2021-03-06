import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            style={{
                backgroundColor: 'pink',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
            }}
        >
            <Link to="/">
                <h2>Servicios Digitales</h2>
            </Link>
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                }}
            >
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/quienes">Quienes Somos?</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/servicios">Servicios</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/contacto">Contacto</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/category/paquetes">Paquetes</Link>
                </li>
                <li
                    style={{
                        margin: '0px 10px',
                    }}
                >
                    <Link to="/cart">Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;