import React, { useState } from 'react';
import { MapComponent } from './mapa';
import { Sidebar } from './menu';
import './src/inicio.css';
import './src/perfil.css'


export function Perfil() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [foto, setFoto] = useState(null);

    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleApellidoChange = (e) => setApellido(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleFotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFoto(e.target.files[0]);
        }
    };
    
    const handleImageClick = () => {
        document.getElementById('fileInput').click(); // Abre el diálogo de selección de archivos
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    // ... tus otros manejadores

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar la información al servidor
    };

    return (
        <main className="contenedor">
            <div className='menu'>
                <Sidebar />
            </div>
            
            <div className='perfil-contenido'>
              <form onSubmit={handleSubmit} className='form-perfil'>
                <div className="foto-perfil-contenedor" onClick={handleImageClick}>
                    {foto ? (
                        <img 
                            src={URL.createObjectURL(foto)} 
                            alt="Foto de Perfil" 
                            className="foto-perfil"
                        />
                    ) : (
                        <div>
                            <img 
                                src='path/to/default/image.jpg'
                                alt="Foto de Perfil" 
                                className="foto-perfil"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                            <div className="foto-perfil-texto">Seleccionar Foto</div>
                        </div>
                    )}
                    <input 
                        type="file" 
                        id="fileInput" 
                        onChange={handleFotoChange} 
                        style={{ display: 'none' }} 
                    />
                </div>

                <div>
                  <label>Nombre:</label>
                  <input type="text" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                  <label>Apellido:</label>
                  <input type="text" value={apellido} onChange={handleApellidoChange} />
                </div>
                <div>
                  <label>Correo Electrónico:</label>
                  <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <div className="password-container">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                        <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                            {passwordVisible ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                </div>
                
                <button type="submit">Guardar Cambios</button>
              </form>
            </div>
        </main>
    );
};
