import "./navBar.css";
import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, /*NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText */ } from 'reactstrap';
import foto2 from '../../images/foto2.png'
//import Link from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);


    return (
        <div>
            <div style={{
                display: 'block', width: 400, marginTop: 50
            }}>
                <Navbar
                    color="dark"
                    container="fluid"
                    dark
                    expand="lg"
                    fixed="top"
                    bgcolor="black"
                    light
                    className="navContainer"
                >
                    <div className="navName">
                        <img className="navImagen" alt='imagen de flight academy' src={foto2} />
                        <NavbarBrand href="/">
                            Flight academy
                        </NavbarBrand>
                    </div>
                    {/* <button onClick={() => { setIsOpen(!isOpen) }} /> */}
                    <div className="navBoton">
                        <div className="navBotonResponsive">
                            <NavbarBrand href="/sobre-nosotros">
                                Sobre nosotros
                            </NavbarBrand>
                            <NavbarBrand href="/cursos">
                                Cursos
                            </NavbarBrand>
                            <NavbarBrand href="/estudiantes">
                                Estudiantes
                            </NavbarBrand>
                            <NavbarBrand href="/galeria">
                                Galería
                            </NavbarBrand>
                            <NavbarBrand href="/login">
                                Turnos
                            </NavbarBrand>
                        </div>
                    </div>
                </Navbar>
            </div>
        </div>
    )

}