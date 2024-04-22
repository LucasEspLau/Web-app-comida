import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './src/listaCocineros.css'

export function ListaCocineros({userName,children,initialIsFollow}){

    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        // Aquí manejarías la lógica de inicio de sesión
    
        // Después de iniciar sesión exitosamente, redirigir a otra ruta
        navigate('/platos'); // Cambia '/ruta-despues-login' por la ruta a la que deseas redirigir
      }
    
      const toChat = (e) => {
        e.preventDefault();
        // Aquí manejarías la lógica de inicio de sesión
    
        // Después de iniciar sesión exitosamente, redirigir a otra ruta
        navigate('/chats'); // Cambia '/ruta-despues-login' por la ruta a la que deseas redirigir
      }
    return(
        <article className='lc-followCard'>
            <header className='lc-followCard-header'>
                <img
                className='lc-followCard-avatar'
                alt='El avatar de midudev'
                src={`https://unavatar.io/${userName}`}
                />
                <div className='lc-followCard-info'>
                    <strong>{children}</strong>
                    <span className='lc-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside className='lc-followCard-aside'>
            <   button className='lc-followCard-button' onClick={toChat}> 
                    Chat
                </button>
                <button className='lc-followCard-button' onClick={handleClick}> 
                    Ver platos
                </button>
            </aside>
        </article>

    )
}