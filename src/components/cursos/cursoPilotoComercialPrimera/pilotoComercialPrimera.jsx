import React from 'react';
import NavBar from '../../navBar/navBar';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';

export default function PilotoComercialPrimera() {
    return (
        <div>
            <NavBar />
            <div className="containerPilotoPrivado">
                <div className="cardPPA">
                    <Card
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Piloto Comercial de Primera Clase de Avión
                            </CardTitle>
                            <CardText className="cardText">
                                Esta licencia te habilita como piloto de vuelos comerciales en aeronaves de hasta 20.000 kgs. MTOW, y como copiloto en aviones cuyo peso máximo al despegue sea superior a los 5.700 kgs.
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
                                El curso de Piloto Comercial de Primera Clase tiene una duración de 3 meses con un régimen de cursada intensivo, que se lleva a cabo a través de 5 encuentros semanales. Para este curso contamos con un staff de profesores de excelencia, conformado por especialistas de distintos ámbitos de la aviación civil y militar, entre los que podemos destacar a Jorge Prelooker, autor del libro «Aerodinámica práctica para pilotos comerciales». El curso incluye materias extracurriculares, excursiones y trabajos integradores. Incluye varios teóricos por año.
                            </CardText>
                            <CardText className="cardText">
                                <p>La estructura curricular del curso posee las siguientes asignaturas:</p>
                                <ul>
                                    <li>Aerodinámica de Alta Velocidad</li>
                                    <li>Despacho de Vuelo y Performance</li>
                                    <li>Legislación y Documentación Aeronáutica</li>
                                    <li>Instrumentos</li>
                                    <li>Meteorología Aplicada</li>
                                    <li>Primeros Auxilios</li>
                                    <li>Reglamento de Vuelos</li>
                                    <li>Turbinas y Turbohélices</li>
                                    <li>Prevención de Accidentes</li>
                                    <li>Navegación Aérea</li>
                                    <li>Factores Humanos</li>
                                </ul>
                            </CardText>
                            <CardText className="cardText">
                                La cursada práctica puede hacerse a distancia, según los tiempos del alumno.
                            </CardText>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Cursada práctica
                            </CardSubtitle>
                            <CardText className="cardText">
                                Haber volado como mínimo 900 horas de vuelo a partir de la fecha que obtuvo la licencia de Piloto Privado de Avión, discriminadas en:
                                <ul>
                                    <li>Como mínimo 450 horas como piloto al mando.</li>
                                    <li>Como mínimo 40 horas de vuelo nocturno como piloto al mando, con no menos de 10 horas de vuelo en travesía y con no menos de 5 despegues y 5 aterrizajes en ruta.</li>
                                    <li>El resto de las horas hasta alcanzar las 900 horas, podrán haber sido realizadas como copiloto o piloto en instrucción.</li>
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
                                    <li>Ser mayor de 21 años.</li>
                                    <li>Tener Licencia de Piloto Comercial de Avión con Habilitación Multimotores.</li>
                                    <li>Haber obtenido el Psicofísico Clase 1.</li>
                                    <li>Tener 650 horas de vuelo.</li>
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
                                    <li>Fotocopia y original de última hoja de libro de vuelo foliada con las horas de vuelo requeridas para la licencia de PCI.</li>
                                    <li>Fotocopia y original del analítico de curso teórico de Piloto Comercial de Primera Clase de Avión. (x3)</li>
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