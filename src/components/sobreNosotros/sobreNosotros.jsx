import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, /*CardSubtitle,*/ CardText } from 'reactstrap';
import './sobreNosotros.css';

export default function SobreNosotros() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                ¿Quienes Somos?
                            </CardTitle>
                            <CardText className="cardText">
                                Desde Flight Academy insistimos en la formación integral de profesionales del aire que cumplan con los estándares de calidad exigidos por las líneas aéreas. Dispone talleres propios, en donde técnicos habilitados por la autoridad aeronáutica realizan el mantenimiento de sus aeronaves bajo los más altos estándares de seguridad. La institución cuenta además con simuladores propios y un staff de instructores de excelencia.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="containerPilotoPrivado">
                <div className="cardPPA1">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Simuladores
                            </CardTitle>
                            <CardText className="cardText">
                                <p>Flight Center cuenta con dos simuladores de vuelo propios, con pizarra teórica de briefing y debriefing, siendo los primeros y únicos en su tipo en el ámbito civil. De esta forma los alumnos tienen la posibilidad de practicar maniobras especialmente difíciles en distintos tipos de aviones y con diversos equipamientos de motores.</p>

                                <p>La práctica en Simulador de Vuelo, es de aplicación necesaria para mejorar la calidad del Vuelo Instrumental, afianzar los conocimientos radioeléctricos, el gerenciamiento de la cabina de vuelo y la interrelación con la tripulación.</p>

                                <p>Estos simuladores, permiten además realizar entrenamiento de vuelo por instrumento tanto diurno como nocturno y combinar prácticas reales de vuelo en condiciones meteorológicas variadas, con múltiples situaciones de emergencia.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="containerPilotoPrivado">
                <div className="cardPPA4">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Aulas e instalaciones
                            </CardTitle>
                            <CardText className="cardText">
                                <p>Disponemos de una sala de pilotos totalmente equipada donde los alumnos realizan las reuniones de briefing y debriefing con sus instructores antes y después de cada vuelo.</p>

                                <p>La escuela cuenta con aulas confortables de gran capacidad, climatizadas, y equipadas con Wi Fi. Los espacios de estudio ofrecen acceso directo al hangar, taller mecánico y plataforma del aeródromo, permitiendo contacto de primera mano con las aeronaves durante el aprendizaje.</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Link to="/">
                <button className='botonVolverCursos'>
                    Volver
                </button>
            </Link>
            <Footer />
        </div>
    )
}