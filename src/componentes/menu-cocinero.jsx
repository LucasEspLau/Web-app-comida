import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './src/menu.css';

export function SidebarCocinero() {


    return (
        <div className="menu-lateral">
            <Link to="/inicioCocinero" className="menu-item">
                <span className="icon">🏠</span>
                <span className="text">Inicio</span>

            </Link>
            <Link to="/chats" className="menu-item">
                <span className="icon">💬</span>
                <span className="text">Chats</span>
            </Link>
            <Link to="/perfil" className="menu-item">
                <span className="icon"><i className="fas fa-user"></i></span>
                <span className="text">Perfil</span>
            </Link>
            <Link to="/login" className="menu-item">
                <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                <span className="text">Cerrar Sesión</span>
            </Link>
        </div>
    );
}