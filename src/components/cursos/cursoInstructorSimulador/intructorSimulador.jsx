import React from 'react';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function InstructorSimulador() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Instructor de ETVI
                            </CardTitle>
                            <CardText className="cardText">
                                El curso de Instructor de ETVI te permite obtener la licencia con la que podrás impartir instrucción en simuladores de vuelo o entrenadores terrestres.
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
                                Programa
                            </CardTitle>
                            <CardSubtitle
                                // className="mb-2 text-muted"
                                tag="h6"
                                align="left"
                            >
                                Cursada teórica
                            </CardSubtitle>
                            <CardText className="cardText">
                                El curso de instructor de ETVI, cuenta con una seminario presencial obligatorio de la materia «Fundamentos y Métodos de Enseñanza». El seminario se dicta regularmente y se programa en función de la disponibilidad de los alumnos.
                            </CardText>
                            <CardText className="cardText">
                                <p>La currícula del curso consta de 10 materias. (Aquellos que ya sean instructores podrán solicitar el reconocimiento de materias por equivalencia):</p>
                                <ul>
                                    <li>Reglamento de Vuelos y Servicios de Tránsito Aéreo</li>
                                    <li>Meteorología Aplicada a la Instrucción</li>
                                    <li>Legislación y Documentación Aeronáutica</li>
                                    <li>Fundamentos de la Enseñanza y el Aprendizaje</li>
                                    <li>Metodología de la Enseñanza y el Aprendizaje</li>
                                    <li>Práctica de la Enseñanza</li>
                                    <li>Información Aeromédica</li>
                                    <li>Teoría de Vuelo por Instrumentos</li>
                                    <li>Aerodrinámica Aplicada a la Instrucción de Vuelo</li>
                                    <li>Prevención de Accidentes</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="containerPilotoPrivado">
                <div className="cardPPA2">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Requisitos de admisión
                            </CardTitle>
                            <CardText className="cardText">
                                <ul>
                                    <li>Ser mayor de 18 años.</li>
                                    <li>Secundario completo.</li>
                                    <li>50 horas de instrucción en ETVI o 25 hs. si es instructor.</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="containerPilotoPrivado">
                <div className="cardPPA4">
                    <Card
                        color="light"
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                ¿Te interesa este curso?
                            </CardTitle>
                            <CardText className="cardText">
                                <p>Contactanos y envianos tu consulta.</p>
                                <ul>
                                    <li>Poner número de contacto.</li>
                                    <li>Poner email de contacto.</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Link to="/cursos">
                <button className='botonVolverCursos'>
                    Volver
                </button>
            </Link>
            <Footer />
        </div>
    )
}