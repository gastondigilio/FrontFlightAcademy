import React from "react";
import { Link } from "react-router-dom";
import './eliminarAeronave.css'

export default function EliminarAeronave() {
    return (
        <div className='eliminarAeronaveContainer'>
            <div className='probando1'>
                <h1>Eliminar Aeronave</h1>
            </div>
            <div className="probando1">
                <form className='form-inputs'>
                    <select>
                        <option>Seleccione una aeronave...</option>
                    </select>
                    <div className="probando1">
                        <button className='btn'>Eliminar</button>
                    </div>
                </form>
            </div>
            <Link to='/home-admin'>
                <button className='botonAdmin'>
                    Volver
                </button>
            </Link>
        </div>
    )
}