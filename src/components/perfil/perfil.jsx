import React from "react";
import Navbar from "../navBar/navBar.jsx";
import NavBarVertical from "../navBarVertical/navBarVertical";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, CardText} from 'reactstrap';
import "./perfil.css";


export default function Perfil() {
// console.log(hola)
    return (
        

        
        <div className="Cointainer">
            <Navbar></Navbar>
            <div className="navBar">
            
            </div>
            <h4>asdasdasasdasdasdas</h4>
            <div className="NavVertical">
            <NavBarVertical />
            </div>
            
            <div className="CardCointainer">
                <Card>
                   
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </div> 
        </div>
        
    )
}