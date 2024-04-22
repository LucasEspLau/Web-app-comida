import React, { useState } from 'react';
import { ListaCocineros } from './listaCocineros';
import { Sidebar } from './menu';
import './src/inicio.css';
import './src/cocineros.css'


const user = [
    {
        userName:"cocinero-1",
        name:"Cocinero 1",
        isFollow:true
    },
    {
        userName:"cocinero-2",
        name:"Cocinero 2",
        isFollow:true
    }
]
export function Cocineros() {


    return (
        <main className="contenedor">
            <div className='menu'>
                <Sidebar></Sidebar>
            </div>
            
            <div className='cocinero-contenido'>
                <div className='ubicar-cocineros'>
                    {
                        user.map(({userName,name,isFollow})=>(
                            <ListaCocineros
                                key={userName}
                                userName={userName}
                                initialIsFollow={isFollow}
                            >
                                {name}
                            </ListaCocineros>
                        ))
                    }
                </div>
                
            </div>
              

        </main>
    );
}
