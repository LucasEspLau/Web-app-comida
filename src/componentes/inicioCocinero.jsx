import React, { useState } from 'react';
import { MapComponent } from './mapa';
import { Sidebar } from './menu';
import './src/inicioCocinero.css';
import { SidebarCocinero } from './menu-cocinero';
import { ListaPlatos } from './listaPlatos';
import { ListaPlatosCocinero } from './listaPlatosCocinero';

const user = [
    {
        userName:"comida-1",
        name:"Comida-1"
    },
    {
        userName:"comida-2",
        name:"Comida-2"
    },
    {
        userName:"comida-1",
        name:"Comida-1"
    },
    {
        userName:"comida-2",
        name:"Comida-2"
    },
    {
        userName:"comida-1",
        name:"Comida-1"
    },
    {
        userName:"comida-2",
        name:"Comida-2"
    }
    
]
export function InicioCocinero() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <main className="contenedor">
            <div className='menu'>
                <SidebarCocinero></SidebarCocinero>
            </div>
            
            <div className='plato-contenido'>
                <button>Agregar Plato</button>
                <div className='ubicar-platos'>
                    {
                        user.map(({userName,name})=>(
                            <ListaPlatosCocinero
                                key={userName}
                                userName={userName}
                            >
                                {name}
                            </ListaPlatosCocinero>
                        ))
                    }
                </div>
                
            </div>
              

        </main>
    );
}
