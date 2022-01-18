import React from 'react';
import NavBar from '../../navBar/navBar';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';

export default function PilotoComercial() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Piloto Comercial de Avión con HVI
                            </CardTitle>
                            <CardText className="cardText">
                                Luego de obtener la licencia de Piloto Privado, el curso de Piloto Comercial de avión es el primer paso comercial de tu carrera aeronáutica. Esta licencia habilitará a realizar vuelos con fines comerciales como fotografía aérea, publicidad, monitoreo de campos, taxi aéreo, entre otros.
                            </CardText>
                            <CardText className="cardText">
                                La licencia de Piloto Comercial de avión, incluye la habilitación de vuelo por instrumentos (HVI) lo que te permitirá pilotear un avión sin referencias visuales, y una habilitación de vuelo nocturno. Con la licencia de piloto comercial de avión con HVI podrás volar aeronaves comerciales de hasta 5700 Kg de MTOW.
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
                                El curso de Piloto Comercial tienen una duración de 5 meses con un régimen de cursada intensivo, desarrollado a través de 6 encuentros semanales. Ofrecemos dos cursos teóricos por año, que comienzan en marzo y agosto. El curso incluye materias extracurriculares, excursiones y trabajos integradores.
                            </CardText>
                            <CardText className="cardText">
                                Para este curso contamos con un staff de profesores de excelencia, conformado por especialistas de distintos ámbitos de la aviación civil y militar, con amplia experiencia y conocimientos.
                            </CardText>
                            <CardText className="cardText">
                                <p>La estructura curricular del curso posee las siguientes asignaturas:</p>
                                <ul>
                                    <li>Aerodinámica</li>
                                    <li>Meteorología</li>
                                    <li>Navegación  aérea</li>
                                    <li>Grupo Motopropulsor</li>
                                    <li>Instrumentos de Vuelo y del Motor</li>
                                    <li>Normas, Reglamentaciones y Servicios de Tránsito Aéreo</li>
                                    <li>Comunicaciones y Sistemas Radioeléctricos</li>
                                    <li>Performance</li>
                                    <li>Teoría de Vuelo por Instrumentos</li>
                                    <li>Factores Humanos</li>
                                    <li>Legislación</li>
                                    <li>Prevención de Accidentes</li>
                                    <li>Supervivencia</li>
                                    <li>Transporte de Mercancías Peligrosas</li>
                                    <li>Maniobras y Procedimientos</li>
                                </ul>
                            </CardText>
                            <CardText className="cardText">
                                La cursada práctica puede hacerse a distancia, según los tiempos del alumno.
                            </CardText>
                            <CardSubtitle
                                // className="mb-2 text-muted"
                                align="left"
                                tag="h6"
                            >
                                Cursada práctica
                            </CardSubtitle>
                            <CardText className="cardText">
                                Consta de 200 hs de vuelo (150 como piloto al mando), discriminadas en:
                                <ul>
                                    <li>80 horas de vuelo de navegación (Travesía) al mando.</li>
                                    <li>30 horas de vuelo por instrumento (Capota) en instrucción.</li>
                                    <li>10 horas de vuelo nocturno.</li>
                                    <li>80 horas restantes deberán hacer vuelo local y/o travesía al mando.</li>
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
                                    <li>Tener la Licencia de Piloto Privado.</li>
                                    <li>Haber obtenido el Psicofísico Clase 1.</li>
                                    <li>Tener el Certificado de Secundario (para extranjeros, el Certificado de estudios secundarios debe estar legalizado por el ministerio de educación y apostillado por el ministerio de relaciones exteriores (apostilla de la Haya).</li>
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
                                    <li>Fotocopia y original de Licencia de Piloto Privado de Avión. (x3)</li>
                                    <li>Fotocopia y original de última hoja de libro de vuelo foliada con las horas de vuelo requeridas para la licencia de PCA c/HVI.</li>
                                    <li>Fotocopia y original del analítico de curso teórico de Piloto Comercial de Avión. (x3)</li>
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