import React, { useState } from 'react';
import { MapComponent } from './mapa';
import { Sidebar } from './menu';
import './src/inicio.css';

/*
<button className="boton-menu" onClick={toggleMenu}>☰</button>
            {menuVisible && <Sidebar />}*/ 
export function Inicio() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <main className="contenedor">
            <div className='menu'>
                <Sidebar></Sidebar>
            </div>
            
            <div className='map-contenido'>
              <MapComponent />
            </div>
              

        </main>
    );
}
