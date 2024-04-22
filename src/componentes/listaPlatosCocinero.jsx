import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './src/listaPlatosCocinero.css'

export function ListaPlatosCocinero({userName,children}){


    return(
        <article className='lpc-followCard'>
            <header className='lpc-followCard-header'>
                <img
                className='lpc-followCard-avatar'
                alt='El avatar de midudev'
                src={`https://unavatar.io/${userName}`}
                />
                <div className='lpc-followCard-info'>
                    <strong>{children}</strong><strong>$15</strong>
                    <span className='lpc-followCard-infoPlato'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium hic neque a amet, ex fuga esse laborum perferendis</span>
                </div>
            </header>

            <aside className='lpc-followCard-aside'>
                <button className='lpc-followCard-button' > 
                    Editar
                </button>
                <button className='lpc-followCard-button' > 
                    Eliminar
                </button>
            </aside>
        </article>

    )
}