import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import './sobreNosotros.css';

export default function SobreNosotros(){
    return (
        <div>
            <NavBar />
            <div className="containerSobreNostros">
            <h4>Estoy en sobre nosotros</h4>
            <p>La estructura curricular del curso posee las siguientes asignaturas:</p>
                                <ul>
                                    <li>Didáctica</li>
                                    <li>Curriculum</li>
                                    <li>Psicología General</li>
                                    <li>Mediación Pedagógica</li>
                                    <li>Gestión Educativa</li>
                                    <li>Legislación</li>
                                    <li>Información Aeromédica</li>
                                    <li>Prevención de Accidentes</li>
                                    <li>Maniobras y Procedimientos</li>
                                    <li>Metodología y Práctica de la Instrucción</li>
                                </ul>
            </div>
            <Link to="/">
                <button className='botonVolverCursos'>
                    Volver
                </button>
            </Link>
            <Footer />
        </div>
    )
}