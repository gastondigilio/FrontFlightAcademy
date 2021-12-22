import "./navBarVertical.css";
import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import foto2 from '../../images/foto2.png'

export default function NavBarVertical() {

    return (
        <div className="navBarVertical">
            <Nav
                vertical
            >
                <div >
                    <NavItem className="navBarVerticalNavItem">
                        <NavLink
                            active
                            href="#"
                        >
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem className="navBarVerticalNavItem">
                        <NavLink href="#">
                            Mis turnos
                        </NavLink>
                    </NavItem>
                    <NavItem className="navBarVerticalNavItem">
                        <NavLink
                            disabled
                            href="#"
                        >
                            Mis vuelos
                        </NavLink>
                    </NavItem>
                    <NavItem className="navBarVerticalNavItem">
                        <NavLink
                            disabled
                            href="#"
                        >
                            Programa de estudio
                        </NavLink>
                    </NavItem>
                    <NavItem className="navBarVerticalNavItem">
                        <NavLink
                            disabled
                            href="#"
                        >
                            Clases
                        </NavLink>
                    </NavItem>
                    <NavItem className="navBarVerticalNavItem">
                        <NavLink
                            disabled
                            href="#"
                        >
                            Información adicional
                        </NavLink>
                    </NavItem>
                    <NavItem className="navBarVerticalNavItem">
                        <NavLink
                            disabled
                            href="#"
                        >
                            Perfil
                        </NavLink>
                    </NavItem>
                </div>
            </Nav>

        </div>
    )

}