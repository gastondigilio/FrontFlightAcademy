import "./navBar.css";
import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, /*NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText */ } from 'reactstrap';
import foto2 from '../../images/logo.png';
//import Link from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);


    return (
        
            
                <Navbar
                    color="dark"

                    
                   
                    
                    
                    className="navContainer"
                >
                    <div className="navName">
                        <img className="navImagen" alt='imagen de flight academy' src={foto2} />
                        <NavbarBrand href="/" className="navBrand">
                        <h5 className="h1-butons-tittle"> Flight academy</h5>
                        </NavbarBrand>
                    </div>
                    
                    <div className="navBoton">
                      
                            <NavbarBrand href="/sobre-nosotros" className="navBrand">
                                <h5 className="h1-butons-tittle">Sobre nosotros</h5>
                            </NavbarBrand>
                            <NavbarBrand href="/cursos" className="navBrand">
                            <h5 className="h1-butons-tittle">Cursos</h5>
                            </NavbarBrand>
                            <NavbarBrand href="/estudiantes" className="navBrand">
                            <h5 className="h1-butons-tittle"> Estudiantes</h5>
                            </NavbarBrand>
                            <NavbarBrand href="/galeria" className="navBrand">
                            <h5 className="h1-butons-tittle"> Galería</h5>
                            </NavbarBrand>
                            <NavbarBrand href="/login" className="navBrand">
                            <h5 className="h1-butons-tittle"> Turnos</h5>
                            </NavbarBrand>
                        
                    </div>
                </Navbar>
            
        
    )

}