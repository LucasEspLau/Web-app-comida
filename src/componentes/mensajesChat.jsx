import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './src/mensajesChat.css'

export function MensajesChat({userName,mensaje,id}){
    
    if (userName === 'me') {
        // Estructura y estilos para mensajes enviados por 'me'
        return (
            <article className='lchats-followCard-me'>
                
                <header className='lchats-followCard-header'>
                    <div className='lchats-followCard-info'>
                        <span className='lchats-followCard-text'>{mensaje}</span>
                    </div>
                    
                </header>
            </article>
        );
    } else {
        // Estructura y estilos para mensajes enviados por otros usuarios
        return (
            <article className='lchats-followCard'>
                <header className='lchats-followCard-header'>
                    <img
                        className='lchats-followCard-avatar'
                        alt={`El avatar de ${userName}`}
                        src={`https://unavatar.io/${userName}`}
                    />
                    <div className='lchats-followCard-info'>
                        <span className='lchats-followCard-text'>{mensaje}</span>
                    </div>
                </header>
            </article>
        );
    }
}