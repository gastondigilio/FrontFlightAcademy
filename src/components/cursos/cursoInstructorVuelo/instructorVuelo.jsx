import React from 'react';
import NavBar from '../../navBar/navBar';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';

export default function InstructorVuelo() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Instructor de Vuelo
                            </CardTitle>
                            <CardText className="cardText">
                                Esta licencia te permitirá a instruir alumnos y pilotos hasta el nivel de tu licencia y habilitaciones.
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
                                El curso presencial de Instructor de Vuelo tiene una duración de 3 meses con un régimen de cursada intensivo, desarrollado a lo largo de 5 encuentros semanales.
                            </CardText>
                            <CardText className="cardText">
                                Contamos con un staff de profesores de excelencia, conformado por especialistas de distintos ámbitos de la aviación civil y militar.
                            </CardText>
                            <CardText className="cardText">
                                <p>La estructura curricular del curso posee las siguientes asignaturas:</p>
                                <ul>
                                    <li>Didáctica</li>
                                    <li>Curriculum</li>
                                    <li>Psicología General</li>
                                    <li>Mediación Pedagógica</li>
                                    <li>Gestión Educativa</li>
                                    <li>Legislación</li>
                                    <li>Información Aeromédica</li>
                                    <li>Prevención de Accidentes</li>
                                    <li>Maniobras y Procedimientos</li>
                                    <li>Metodología y Práctica de la Instrucción</li>
                                </ul>
                            </CardText>
                            <CardText className="cardText">
                                La currícula incluye materias extracurriculares, excursiones y trabajos integradores. Se dictan varios cursos teóricos por año.
                            </CardText>
                            <CardSubtitle
                                // className="mb-2 text-muted"
                                tag="h6"
                                align="left"
                            >
                                Cursada práctica
                            </CardSubtitle>
                            <CardText className="cardText">
                                Si es piloto privado de avión, deberá volar 1000 horas de vuelo como piloto al mando o piloto en instrucción de las cuales como mínimo 300 serán de travesia como piloto al mando.
                            </CardText>
                            <CardText className="cardText">
                                Si es piloto comercial de avión, debera volar 500 horas de vuelo como piloto al mando o piloto en instrucción de las cuales como mínimo 150 serán de travesía como piloto al mando.
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
                                    <li>Ser mayor de 21 años.</li>
                                    <li>Tener Licencia de Piloto Comercial de Avión o la licencia de Piloto Privado de Avión.</li>
                                    <li>Haber obtenido el Psicofísico Clase 1.</li>
                                    <li>Tener 450 horas de vuelo si es PCA sino 1000 horas si es PPA.</li>
                                    <li>Tener Certificado del Colegio Secundario. (extranjeros apostillado).</li>
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
                                    <li>Fotocopia y original de DNI (x3). En el caso de los alumnos extranjeros, Fotocopia del pasarporte.</li>
                                    <li>Fotocopia y original de Certificado de Estudios Secundarios legalizado. (x3)</li>
                                    <li>Fotocopia y original del certificado médico aeronáutico Clase I. (x3)</li>
                                    <li>Foto 4 x 4 fondo azul de frente. (x3)</li>
                                    <li>Fotocopia y original de Licencia de Piloto Comercial de Avión. (x3)</li>
                                    <li>Fotocopia y original de última hoja de libro de vuelo foliada con las horas de vuelo requeridas para la licencia de IV.</li>
                                    <li>Fotocopia y original del analítico de curso teórico de Instructor de vuelo. (x3)</li>
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
            <Footer />
        </div>
    )
}