import './home.css';
import React from 'react';
import Navbar from "../navBar/navBar";
import NavBarVertical from "../navBarVertical/navBarVertical";
import { Form, Row, Col, FormGroup, Button, Label, Input } from 'reactstrap';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="navBarVerticalContainer">
                <NavBarVertical />
            </div>
            <div className="contenedor">
                <h4>Bienvenido</h4>
                {/* <div className="container">
                    <div className="containerGrid1">
                        <label>X vuelos totales</label>
                        <br></br>
                        <br></br>
                        <NavLink
                            active
                            href="#"
                        >
                            Más info
                        </NavLink>
                    </div>
                    <div className="containerGrid2">
                        <label>X hs de vuelo</label>
                        <br></br>
                        <br></br>
                        <NavLink
                            active
                            href="#"
                        >
                            Más info
                        </NavLink>
                    </div>
                    <div className="containerGrid3">
                        <label>X hs de vuelo este mes</label>
                        <br></br>
                        <br></br>
                        <NavLink
                            active
                            href="#"
                        >
                            Más info
                        </NavLink>
                    </div>
                    <div className="containerGrid4">
                        <label>X próximos turnos</label>
                        <br></br>
                        <br></br>
                        <NavLink
                            active
                            href="#"
                        >
                            Más info
                        </NavLink>
                    </div>
                </div> */}
                
        </div>
        </div >
    )

}