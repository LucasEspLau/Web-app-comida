import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './src/register.css';

export function RegistroCard() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica de registro

    // Después de registrar exitosamente, redirigir a otra ruta
    navigate('/login'); // Cambia '/ruta-despues-registro' por la ruta a la que deseas redirigir
  }
  return (
    <div className='container'>
      <div className='form-login'>
        <div className='registro-card'>
          <h2 className='registro-title'>Registrarse</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" type="text" placeholder="Introduce tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input id="apellido" type="text" placeholder="Introduce tu apellido" />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input id="correo" type="email" placeholder="Introduce tu correo electrónico" />
            </div>
            <div className="form-group">
              <label htmlFor="passwordRegistro">Contraseña</label>
              <input id="passwordRegistro" type="password" placeholder="Crea una contraseña" />
            </div>
            
            <button type="submit">Registrarse</button>
          </form>
          <div className='url-login'>
          <p>¿Tienes cuenta? <Link to="/login">Inicia Sesión</Link></p>
          </div>
        </div>
      </div>
    </div> 
    
  );
}
