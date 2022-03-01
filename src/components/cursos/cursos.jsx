import React from 'react';
import './cursos.css';
import NavBar from '../navBar/navBar';
import { Button, /*InputGroup, Input, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel, Card, CardBody, CardTitle, CardSubtitle, CardText */} from 'reactstrap';
//import CardContent from "@mui/material/CardContent";
//import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../footer/footer';
import foto6 from '../../images/foto6.png';
import pca from '../../images/pca.jpg';
import pcia from '../../images/pcia.jpg';
import iv from '../../images/iv.jpg';
//import etvi1 from '../../images/etvi1.jpg';
import etvi2 from '../../images/etvi2.jpg';

export default function Cursos() {
    return (
        <div className="cursosContainerTotal">
            <NavBar />
            <div className="cursosContainerTotal1">
                <div className="ContainerCursos">

                
                    
                        <div className="curso-card">
                    
                    
                                    <h4>Curso Piloto Privado de Avión</h4>
                                    <div className="divCursos">
                                        <img src={foto6} alt='imagen de cursos' className="imagenCursos" />
                                        <div className="divCursos2">
                                            <p className='detailSummary'>La licencia de piloto privado de avión con VFR controlado te permitirá volar monomotores de hasta 5.700 Kg de peso máximo de despegue.</p>
                                            <Button href="/cursos/piloto-privado" className="btn6">
                                                Más info
                                            </Button>
                                        </div>
                                    </div>
                                
                        
                        </div>
                        
                        
                        
            
                        <div className="curso-card">
                    
                        
                                    <h4>Curso Piloto Comercial de Avión</h4>
                                    <div className="divCursos">
                                        <img src={pca} alt='imagen de cursos' className="imagenCursos" />
                                        <div className="divCursos2">
                                            <p className='detailSummary'>La licencia de piloto comercial de avión con HVI te permitirá volar aeronaves comerciales de hasta 5.700 Kg de MTOW.</p>
                                            <Button href="/cursos/piloto-comercial" className="btn6">
                                                Más info
                                            </Button>
                                        </div>
                                    </div>
                            
                        </div>
                
                    
                        <div className="curso-card">
                            
                                    <h4>Curso Piloto Comercial de Primera Clase de Avión</h4>
                                    <div className="divCursos">
                                        <img src={pcia} alt='imagen de cursos' className="imagenCursos" />
                                        <div className="divCursos2">
                                            <p className='detailSummary'>La Licencia te habilita como piloto de vuelos comerciales en aeronaves de hasta 20.000 kgs.</p>
                                            <Button href="/cursos/piloto-comercial-primera-clase" className="btn6">
                                                Más info
                                            </Button>
                                        </div>
                                    </div>
                                
                        
                    </div>
                    <div className="curso-card">
                            
                                    <h4>Curso Instructor de Vuelo</h4>
                                    <div className="divCursos">
                                        <img src={iv} alt='imagen de cursos' className="imagenCursos" />
                                        <div className="divCursos2">
                                            <p className='detailSummary'>Esta licencia te permitirá a instruir alumnos y pilotos hasta el nivel de tu licencia y habilitaciones.</p>
                                            <Button href="/cursos/instructor-vuelo" className="btn6">
                                                Más info
                                            </Button>
                                        </div>
                                    </div>
                                
                        
                        </div>
                
                
                        <div className="curso-card">
                                
                                    <h4>Curso Instructor de ETVI</h4>
                                    <div className="divCursos">
                                        <img src={etvi2} alt='imagen de cursos' className="imagenCursos" />
                                        <div className="divCursos2">
                                            <p className='detailSummary'>El curso de Instructor de ETVI te permite obtener la licencia con la que podrás impartir instrucción en simuladores de vuelo o entrenadores terrestres.</p>
                                            <Button href="/cursos/instructor-simulador" className="btn6">
                                                Más info
                                            </Button>
                                        </div>
                                    </div>
                                
                    
                        </div>
            
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