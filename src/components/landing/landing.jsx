import './landing.css'
import React from 'react';
import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Login from './login';
import NavBar from '../navBar/navBar';
import fotoModificada1 from '../../images/fotoModificada1.png';
import foto2 from '../../images/foto2.png';
import foto6 from '../../images/foto6.png';
import ppa from '../../images/ppa.png';
import pcia from '../../images/pcia.jpg';
import pca from '../../images/pca.jpg';
import iv from '../../images/iv.jpg'
import Footer from '../footer/footer';

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
                                <img src={foto6} className="imagenLanding" />
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Curso de Piloto Privado
                                </CardSubtitle>
                                <CardText>
                                    La licencia de piloto privado de avión con VFR controlado te permitirá volar monomotores de hasta 5.700 Kg de peso máximo de despegue.
                                </CardText>
                                <Button href="/cursos/piloto-privado">
                                    Más info
                                </Button>
                            </CardBody>
                        </Card>
                        <Card
                            color="light"
                        >
                            <CardBody>
                                <img src={pca} className="imagenLanding" />
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Curso Piloto Comercial
                                </CardSubtitle>
                                <CardText>
                                    La licencia de piloto comercial de avión con HVI te permitirá volar aeronaves comerciales de hasta 5.700 Kg de MTOW.
                                </CardText>
                                <Button href="/cursos/piloto-comercial">
                                    Más info
                                </Button>
                            </CardBody>
                        </Card>
                        <Card
                            color="light"
                        >
                            <CardBody>
                                <img src={pcia}className="imagenLanding" />
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Curso Piloto Comercial de Primera clase
                                </CardSubtitle>
                                <CardText>
                                    La Licencia te habilita como piloto de vuelos comerciales en aeronaves de hasta 20.000 kgs.
                                </CardText>
                                <Button href="/cursos/piloto-comercial-primera-clase">
                                    Más info
                                </Button>
                            </CardBody>
                        </Card>
                        <Card
                            color="light"
                        >
                            <CardBody>
                                <img src={iv} className="imagenLanding" />
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Curso de Instructor de Vuelo
                                </CardSubtitle>
                                <CardText>
                                    Esta licencia te permitirá a instruir alumnos y pilotos hasta el nivel de tu licencia y habilitaciones.
                                </CardText>
                                <Button href="/cursos/instructor-vuelo">
                                    Más info
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
{/* </div> */ }
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