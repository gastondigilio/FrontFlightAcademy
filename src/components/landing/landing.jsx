import './landing.css'
import React from 'react';
import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Login from './login';
import NavBar from '../navBar/navBar';
import fotoModificada1 from '../../images/fotoModificada1.png';
import foto2 from '../../images/foto2.png';
import foto3 from '../../images/foto3.png';
import foto4 from '../../images/foto4.png';

export default function Landing() {
    return (
        <div className="contenedorLanding">
            <div >
                {/* <div className="probando"> */}
                <NavBar />
                <div className="cursosGrid">
                <div className="containerCursosGrid">
                    <Card
                        color="light"
                    >
                        <CardBody>
                            <img src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" className="imagenLanding" />
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Curso de Piloto Privado
                            </CardSubtitle>
                            <CardText>
                                La licencia de piloto privado de avión con VFR controlado te permitirá volar monomotores de hasta 5.700 Kg de peso máximo de despegue.
                            </CardText>
                            <Button href="/cursos/pilotoprivado">
                                Más info
                            </Button>
                        </CardBody>
                    </Card>
                    <Card
                        color="light"
                    >
                        <CardBody>
                            <img src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" className="imagenLanding" />
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Curso Piloto Comercial
                            </CardSubtitle>
                            <CardText>
                                La licencia de piloto comercial de avión con HVI te permitirá volar aeronaves comerciales de hasta 5.700 Kg de MTOW.
                            </CardText>
                            <Button href="/cursos/pilotocomercial">
                                Más info
                            </Button>
                        </CardBody>
                    </Card>
                    <Card
                        color="light"
                    >
                        <CardBody>
                            <img src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" className="imagenLanding" />
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Curso Piloto Comercial de Primera clase
                            </CardSubtitle>
                            <CardText>
                                La Licencia te habilita como piloto de vuelos comerciales en aeronaves de hasta 20.000 kgs.
                            </CardText>
                            <Button href="/cursos/pilotocomercialprimeraclase">
                                Más info
                            </Button>
                        </CardBody>
                    </Card>
                    <Card
                        color="light"
                    >
                        <CardBody>
                            <img src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" className="imagenLanding" />
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Curso de Instructor de Vuelo
                            </CardSubtitle>
                            <CardText>
                                Esta licencia te permitirá a instruir alumnos y pilotos hasta el nivel de tu licencia y habilitaciones.
                            </CardText>
                            <Button href="/cursos/instructorvuelo">
                                Más info
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                </div>
                {/* </div> */}
                {/* <div className="images">
                <UncontrolledCarousel
                    items={[
                        {
                            
                            key: 1,
                            src: fotoModificada1
                        },
                        {
                            
                            key: 2,
                            src: foto2
                        },
                        {
                            
                            key: 3,
                            src: foto3
                        },
                        { 
                            key: 4,
                            src: foto4
                        }
                    ]}
                />
                </div> */}
                {/* <div className="contenedorTitulo">
                <h4>Estoy volando...</h4>
            </div> */}
            </div>
        </div>
    )
}