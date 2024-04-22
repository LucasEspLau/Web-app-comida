import React, { useState,useEffect } from 'react';
import { Sidebar } from './menu';
import './src/inicio.css';
import './src/detalleChat.css'
import { MensajesChat } from './mensajesChat';
import { Link } from 'react-router-dom';


const mensajes = [
    {   id:1,
        userName:"cocinero-1",
        mensaje:"Estoy en camino",
        fecha:"19/01/2024",
        hora:"16:40:15"
    },
    {   
        id:3,
        userName:"me",
        mensaje:"Traeme mi comida",
        fecha:"20/01/2024",
        hora:"02:20:10"
    },
    {
        id:2,
        userName:"me",
        mensaje:"Te espero",
        fecha:"19/01/2024",
        hora:"16:42:10"
    },
    {
        id:4,
        userName:"me",
        mensaje:"Donde estas",
        fecha:"20/01/2024",
        hora:"02:24:10"
    }
    
    
]
const cocinero = [
    {
        userName:"cocinero-1",
        name:"Cocinero-1"
    }
    
]
const user = [
    {
        userName:"me",
        name:"Mi Nombre"
    }
    
]
const mensajeOrdenados = [

]
export function DetalleChat() {
    const [mensajeOrdenados, setMensajeOrdenados] = useState([]);

    const convertirFechaHora = (fecha, hora) => {
        const partesFecha = fecha.split("/");
        const fechaFormatoISO = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}T${hora}`;
        return new Date(fechaFormatoISO);
    }

    useEffect(() => {
        const mensajesConFecha = mensajes.map(mensaje => ({
            ...mensaje,
            fechaCompleta: convertirFechaHora(mensaje.fecha, mensaje.hora)
        }));

        mensajesConFecha.sort((a, b) => a.fechaCompleta - b.fechaCompleta); // Orden ascendente

        setMensajeOrdenados(mensajesConFecha);
    }, []);

    return (
        <main className="contenedor">
            <div className='menu'>
                <Sidebar></Sidebar>
            </div>
            
            <div className='chats-contenido'>
                <div className='titulo-chats'>
                    <div className='encabezado-chats'>
                        <Link to='/chats' className='encabezado-chats-link'>←</Link>
                        <h3>{cocinero[0].name}</h3>
                        <div className='encabezado-chats-link'></div>
                    </div>
                    
                </div>
                <div className='ubicar-chats-detalle'>
                    
                    {
                        mensajeOrdenados.map(({ userName, mensaje, id }) => (
                            <MensajesChat
                                key={id}
                                userName={userName}
                                mensaje={mensaje}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}