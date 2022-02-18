import React from "react";
import {Link} from "react-router-dom";
import './agregarAeronave.css';

export default function AgregarAeronave() {
    return (
        <div className='agregarAeronaveContainer'>
            <div className='separadorDivs'>
            <h1>Agregar Aeronave</h1>
            </div>
            <div>
                <form className='form-inputs' >
                    <input
                        className='probando'
                        // onChange={handleInputChange}
                        // value={input.name}
                        type='text'
                        name='name'
                        placeholder='Marca'
                    />
                    <input
                        className='probando'
                        // onChange={handleInputChange}
                        // value={input.name}
                        type='text'
                        name='name'
                        placeholder='Modelo'
                    />
                    <input
                        className='probando'
                        // onChange={handleInputChange}
                        // value={input.name}
                        type='text'
                        name='name'
                        placeholder='Matricula'
                    />
                    {/* <button onClick={notify}>Crear categoría</button> */}
                    <button className='btn'>Agregar</button>
                </form>
                <Link to='/home-admin'>
                    <button className='botonAdmin'>
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
}
