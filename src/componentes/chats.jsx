import React, { useState } from 'react';
import { Sidebar } from './menu';
import './src/inicio.css';
import './src/chats.css'
import { ListaChats } from './listaChats';

const user = [
    {
        userName: "cocinero-1",
        name: "Cocinero-1"
    },
    {
        userName: "cocinero-2",
        name: "Cocinero-2"
    },
    {
        userName: "cocinero-3",
        name: "Cocinero-3"
    },
    {
        userName: "cocinero-4",
        name: "Cocinero-4"
    },
    {
        userName: "cocinero-5",
        name: "Cocinero-5"
    },
    {
        userName: "cocinero-6",
        name: "Cocinero-6"
    },
    {
        userName: "cocinero-7",
        name: "Cocinero-7"
    },
    {
        userName: "cocinero-8",
        name: "Cocinero-8"
    },
    {
        userName: "cocinero-9",
        name: "Cocinero-9"
    },
    {
        userName: "cocinero-10",
        name: "Cocinero-10"
    },
    {
        userName: "cocinero-11",
        name: "Cocinero-11"
    },
    {
        userName: "cocinero-12",
        name: "Cocinero-12"
    }
];

export function Chats() {


    return (
        <main className="contenedor">
            <div className='menu'>
                <Sidebar></Sidebar>
            </div>
            
            <div className='chats-contenido'>
                <div className='titulo-chats'>
                    <h1>
                        Chats
                    </h1>
                
                </div>
                <div className='ubicar-chats'>
                    {
                        user.map(({userName,name})=>(
                            <ListaChats
                                key={userName}
                                userName={userName}
                            >
                                {name}
                            </ListaChats>
                        ))
                    }
                </div>
                
            </div>
              

        </main>
    );
}
