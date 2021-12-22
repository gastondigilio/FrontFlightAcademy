import React from 'react';
import './landing.css';
import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel } from 'reactstrap';
import foto5 from '../../images/foto5.gif';

export default function Login(){
    return(
        <div className="contenedorLogin">
                <h4>Bienvenidos</h4>
                <h5>Inicie sesión para continuar</h5>
                <Media>
                    <Media left href="#">
                        <Media
                            object
                            src=
                            {foto5}
                            alt="cat"
                        />
                    </Media>
                </Media>
                <br />
                <InputGroup>
                    <Input placeholder="Usuario" />
                </InputGroup>
                <br />
                <InputGroup>
                    <Input placeholder="Contraseña" />
                </InputGroup>
                <br />
                <div className="contenedorBoton">
                    <ButtonGroup>
                        <div className="boton">
                            <Button
                                color="primary"
                                outline
                            >
                                Iniciar sesión
                            </Button>
                        </div>
                        <br />
                        <div className="boton1">
                            <Button
                            color='primary'
                                outline
                            >
                                Registrarme
                            </Button>
                        </div>
                    </ButtonGroup>
                </div>
            </div>
    )
}