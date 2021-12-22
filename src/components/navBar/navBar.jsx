import "./navBar.css";
import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import foto2 from '../../images/foto2.png'

export default function NavBar() {

    return (
        <div>
            <Navbar
                color="dark"
                container="fluid"
                dark
                expand="lg"
                fixed="top"
                light
                className="navContainer"
            >
                <div className="navName">
                <img className="navImagen" src={foto2} />
                <NavbarBrand href="/">
                    Flight academy
                </NavbarBrand>
                </div>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <div className="navBoton">
                <Collapse navbar container="fluid">
                <NavbarBrand href="/">
                    Usuario logueado
                </NavbarBrand>
                <NavbarBrand href="/">
                    Cerrar Sesión
                </NavbarBrand>
                </Collapse>
                </div>
            </Navbar>
        </div>
    )

}