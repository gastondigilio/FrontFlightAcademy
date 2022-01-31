import React from 'react';
import NavBar from '../navBar/navBar';
import { Card, CardBody, CardTitle, CardText /*, CardSubtitle */ } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import './estudiantes.css';

export default function Estudiantes() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Requisitos de inscripción para el Curso de Piloto Privado de Avión
                            </CardTitle>
                            <CardText className="cardText">
                                <h5>Si sos argentino</h5>
                                <ul>
                                    <li>Ser mayor de 16 (dieciséis) años y 9 (nueve) meses. Los alumnos menores de 18 años tienen la obligación de presentar una autorización de los padres certificada por un Juez de Paz.</li>
                                    <li>Certificado de estudios primarios escolares (analítico de estudios).</li>
                                    <li>Certificado médico aeronáutico de Argentina.</li>
                                    <li>Foto 4cm x 4cm de frente con fondo azul.</li>
                                </ul>
                            </CardText>
                            <CardText className="cardText">
                                <h5 >Si sos extranjero</h5>
                                <ul>
                                    <li>Ser mayor de 16 (dieciséis) años y 9 (nueve) meses. Los alumnos menores de 18 años tienen la obligación de presentar una autorización de los padres certificada por un Juez de Paz o escribano legalizado y apostillado por el Ministerio de relaciones exteriores (Apostilla de la Haya).</li>
                                    <li>Certificado de estudios escolares primario y/o secundario legalizados por el ministerio de educación y apostillado por el ministerio de relaciones exteriores (Apostilla de la Haya).</li>
                                    <li>Certificado médico aeronáutico de Argentina Clase II (Se realiza en Argentina).</li>
                                    <li>Foto 4cm x 4cm de frente con fondo azul.</li>
                                    <li>Leer, hablar, escribir y entender el idioma español.</li>
                                </ul>
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
                                Requisitos de inscripción para el Curso de Piloto Comercial de Avión con HVI
                            </CardTitle>
                            <CardText className="cardText">
                                <h5>Si sos argentino</h5>
                                <ul>
                                    <li>Tener licencia de Piloto Privado de Avión.</li>
                                    <li>Certificado de estudios secundarios (analítico de estudios).</li>
                                    <li>Certificado médico aeronáutico de Argentina Clase I.</li>
                                </ul>
                            </CardText>
                            <CardText className="cardText">
                                <h5>Si sos extranjero</h5>
                                <ul>
                                    <li>Tener licencia de Piloto Privado de Avión.</li>
                                    <li>Certificado de estudios secundarios legalizado por el ministerio de educación y apostillado por el ministerio de relaciones exteriores (apostilla de la Haya).</li>
                                    <li>Certificado médico aeronáutico de Argentina Clase I (Se realiza en Argentina)..</li>
                                    <li>Leer, hablar, escribir y entender el idioma español.</li>
                                </ul>
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