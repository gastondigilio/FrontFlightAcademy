import React from 'react';
import './landing.css';
import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel } from 'reactstrap';

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
                            "https://lh3.googleusercontent.com/proxy/OEYcr4jKbDn34wgRW6bSJtFmXhKEzhF5jQ7xYdZlmbBDVFsHsnFvGcHgTU9UkUkdMnAolq2Dwy9_x6_nb9MbXktJlZ5VC8d1oUVGuCS-20gXcLzBYYNLXsQ5n7jORPwI7fNHWiChRMnn3V13Ster5JfSHA"
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
                                color="success"
                                outline
                            >
                                Iniciar sesión
                            </Button>
                        </div>
                        <br />
                        <div className="boton1">
                            <Button
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