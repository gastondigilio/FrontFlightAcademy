import './pilotoPrivado.css';
import React from 'react';
import NavBar from '../../navBar/navBar';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function PilotoPrivado() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Piloto Privado de Avión con VFR controlado
                            </CardTitle>
                            <CardText className="cardText">
                                El curso de Piloto Privado de avión es el primer paso en tu carrera aeronáutica. Esta licencia te habilitará para hacer vuelos visuales con referencia al terreno, es decir vuelo VFR (Visual Flight Rules), utilizando los instrumentos de vuelo sólo como ayuda complementaria. Esta licencia no te habilitará para hacer vuelos por instrumentos. La licencia de piloto privado de avión con VFR controlado te permitirá volar aviones monomotores de hasta 5700 Kg de peso máximo de despegue. Con esta licencia podrás realizar vuelos deportivos, vuelos de travesía o llevar pasajeros pero no de forma comercial.
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
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cursada teórica
                            </CardSubtitle>
                            <CardText className="cardText">
                                El Curso de Piloto Privado está conformado por 8 clases teóricas de 4hs c/u, y una curricula que abarca diferentes temáticas, como por ejemplo principios aerodinámicos, tipos de motores e instrumentos de vuelo y motor, atmósfera, servicios meteorológicos, clasificación de los espacios aéreos, circuitos de tránsito, alfabeto aeronáutico, lectura y comprensión de los equipos, cartas visuales e instrumentales, planificación y ejecución de travesías, etc.
                            </CardText>
                            <CardText className="cardText">
                                <p>La estructura curricular del curso posee las siguientes asignaturas:</p>
                                <ul>
                                    <li>Generalidades y reglamentación</li>
                                    <li>Aerodinámica</li>
                                    <li>Motores e instrumentos</li>
                                    <li>Meteorología</li>
                                    <li>Maniobras</li>
                                    <li>Comunicaciones</li>
                                    <li>Radioeléctrica</li>
                                    <li>Navegación</li>
                                </ul>
                            </CardText>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cursada práctica
                            </CardSubtitle>
                            <CardText className="cardText">
                                Las lecciones teóricas van acompañadas de Lecciones de Vuelo que constan de un mínimo de 40 horas, (requeridas por ANAC – Administración Nacional de Aviación Civil). Dependiendo del alumno, las horas de vuelo necesarias para alcanzar los estándares de aprobación, podrían incrementarse. Con 45/50 hs (promedio) un alumno ya está listo para dar su examen. Los vuelos de instrucción se realizan en nuestros aviones Cessna 152 con instructor de vuelo a bordo. La practica también incluye 5 lecciones de simulador.
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
                                    <li>Ser mayor de 16 (dieciséis) años y 9 (nueve) meses. Los alumnos menores de 18 años tienen la obligación de presentar una autorización de los padres certificada por un Juez de Paz.</li>
                                    <li>Tener certificado de estudios primarios escolares.</li>
                                    <li>Haber obtenido el Psicofísico Clase 2.</li>
                                    <li>Los alumnos extranjeros deben leer, hablar, escribir y entender el idioma español.</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="containerPilotoPrivado">
                <div className="cardPPA3">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Documentación requerida
                            </CardTitle>
                            <CardText className="cardText">
                                <p>La siguiente documentación es requerida para el pedido de examen, una vez que el piloto esté en condiciones de rendir:</p>
                                <ul>
                                    <li>Los alumnos menores de 18 años tienen la obligación de presentar una autorización de los padres certificada por un Juez de Paz (los alumnos extranjeros deben tenerlo legalizado y apostillado por el Ministerio de relaciones exteriores (Apostilla de la Haya).</li>
                                    <li>Fotocopia de DNI. En el caso de extranjeros, fotocopia del pasaporte.</li>
                                    <li>Certificado médico aeronáutico de Argentina Clase II (psicofísico). Los extranjeros deben realizarlo en Argentina, ya que el certificado médico de su país no será válido en Argentina.</li>
                                    <li>Foto 4cm x 4cm de frente con fondo azul.</li>
                                    <li>Certificado analítico de estudios primarios o secundarios. Los alumnos extranjeros deben tenerlo legalizado por el ministerio de educación y apostillado por el ministerio de relaciones exteriores (Apostilla de la Haya).</li>
                                    <li>Comprobante de derecho de examen.</li>
                                    <li>Comprobante de pago.</li>
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
        </div>
    )
}