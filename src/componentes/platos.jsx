import React, { useState } from 'react';
import { ListaPlatos } from './listaPlatos';
import { Sidebar } from './menu';
import './src/inicio.css';
import './src/platos.css'


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
export function Platos() {


    return (
        <main className="contenedor">
            <div className='menu'>
                <Sidebar></Sidebar>
            </div>
            
            <div className='plato-contenido'>
                <div className='ubicar-platos'>
                    {
                        user.map(({userName,name})=>(
                            <ListaPlatos
                                key={userName}
                                userName={userName}
                            >
                                {name}
                            </ListaPlatos>
                        ))
                    }
                </div>
                
            </div>
              

        </main>
    );
}
