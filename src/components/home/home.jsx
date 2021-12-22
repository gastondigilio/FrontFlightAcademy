import './home.css';
import React from 'react';
import Navbar from "../navBar/navBar";
import NavBarVertical from "../navBarVertical/navBarVertical";

export default function Home () {
    return(
        <div>
            <Navbar />
            <div className="navBarVerticalContainer">
            <NavBarVertical />
            </div>
        <div className="contenedor">
            <h4>Bienvenido</h4>
        </div>
        </div>
    )

}