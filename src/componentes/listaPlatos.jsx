import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './src/listaPlatos.css'

export function ListaPlatos({userName,children}){


    return(
        <article className='lp-followCard'>
            <header className='lp-followCard-header'>
                <img
                className='lp-followCard-avatar'
                alt='El avatar de midudev'
                src={`https://unavatar.io/${userName}`}
                />
                <div className='lp-followCard-info'>
                    <strong>{children}</strong><strong>$15</strong>
                    <span className='lp-followCard-infoPlato'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium hic neque a amet, ex fuga esse laborum perferendis</span>
                </div>
            </header>

            <aside className='lp-followCard-aside'>
                <button className='lp-followCard-button' > 
                    Ver platos
                </button>
            </aside>
        </article>

    )
}