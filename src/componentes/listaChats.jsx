import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './src/listaChats.css'

export function ListaChats({userName,children,initialIsFollow}){

    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        // Aquí manejarías la lógica de inicio de sesión
    
        // Después de iniciar sesión exitosamente, redirigir a otra ruta
        navigate('/platos'); // Cambia '/ruta-despues-login' por la ruta a la que deseas redirigir
      }
    

    return(
        <Link to='/detalleChat' className='lchats-followCard'>
            <header className='lchats-followCard-header'>
                <img
                className='lchats-followCard-avatar'
                alt='El avatar de midudev'
                src={`https://unavatar.io/${userName}`}
                />
                <div className='lchats-followCard-info'>
                    <strong>{children}</strong>
                    <span className='lchats-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
        </Link>

    )
}