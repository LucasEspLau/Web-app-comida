import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './src/login.css';

export function LoginCard(){
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica de inicio de sesión

    // Después de iniciar sesión exitosamente, redirigir a otra ruta
    navigate('/inicio'); // Cambia '/ruta-despues-login' por la ruta a la que deseas redirigir
  }
  const handleSubmit2 = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica de inicio de sesión

    // Después de iniciar sesión exitosamente, redirigir a otra ruta
    navigate('/inicioCocinero'); // Cambia '/ruta-despues-login' por la ruta a la que deseas redirigir
  }

  return (
    <div className='container'>
      <div className='form-login'>
        <div className='login-card'>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <input id="email" type="email" placeholder="Introduce tu correo" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input id="password" type="password" placeholder="Introduce tu contraseña" />
            </div>
            
            <button type="submit">Iniciar Sesión</button>
          </form>
          <form onSubmit={handleSubmit2}>
            <button type="submit">Iniciar Sesión Cocinero</button>
          </form>
          
          <div className='url-registro'>
            <p>¿No tienes cuenta? <Link to="/registro">Registrarse</Link></p>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}
