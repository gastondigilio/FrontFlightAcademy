import React from 'react';
import './cursos.css';
import NavBar from '../navBar/navBar';
import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../footer/footer';

export default function Cursos() {
    return (
        <div className="cursosContainerTotal">
            <NavBar />
            <div className="ContainerCursos">

                {/* <div className="ContainerCursos">
                <div className='detailContainer2'>
                    <Card sx={{ maxWidth: 820 }}>
                        <CardContent className='misComprasCard1'>
                            <div>
                                <Typography gutterBottom variant='h5' component='div'>
                                    <div className='cardTitle'>
                                        <h4>Curso Piloto Privado de Avión</h4>
                                    </div>

                                    <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" />
                                </Typography>
                            </div>
                            <div className='detailContainerCard2'>
                                <Typography variant='body2' color='text.secondary'>
                                    <li className='detailSummary'>La licencia de piloto privado de avión con VFR controlado te permitirá volar monomotores de hasta 5.700 Kg de peso máximo de despegue.</li>
                                    <div>
                                        <Link to='/cursos/pilotoprivado'>
                                            <button
                                                type='button'
                                                className='btn6'
                                            >
                                                Más info
                                            </button>
                                        </Link>

                                    </div>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='detailContainer2'>
                    <Card sx={{ maxWidth: 820 }}>
                        <CardContent className='misComprasCard1'>
                            <div>
                                <Typography gutterBottom variant='h5' component='div'>
                                    <div className='cardTitle'>
                                        <h4>Curso Piloto Comercial</h4>
                                    </div>

                                    <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" />
                                </Typography>
                            </div>
                            <div className='detailContainerCard2'>
                                <Typography variant='body2' color='text.secondary'>
                                    <li className='detailSummary'>La licencia de piloto comercial de avión con HVI te permitirá volar aeronaves comerciales de hasta 5.700 Kg de MTOW.</li>
                                    <div>
                                        <Link to="/cursos/pilotocomercial">
                                            <button
                                                type='button'
                                                className='btn6'
                                            >
                                                Más info
                                            </button>
                                        </Link>
                                    </div>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='detailContainer2'>
                    <Card sx={{ maxWidth: 820 }}>
                        <CardContent className='misComprasCard1'>
                            <div>
                                <Typography gutterBottom variant='h5' component='div'>
                                    <div className='cardTitle'>
                                        <h4>Curso Piloto Comercial de Primera Clase</h4>
                                    </div>

                                    <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" />
                                </Typography>
                            </div>
                            <div className='detailContainerCard2'>
                                <Typography variant='body2' color='text.secondary'>
                                    <li className='detailSummary'>La Licencia te habilita como piloto de vuelos comerciales en aeronaves de hasta 20.000 kgs.</li>
                                    <div>
                                        <Link to='/cursos/pilotocomercialprimeraclase'>
                                            <button
                                                type='button'
                                                className='btn6'
                                            >
                                                Más info
                                            </button>
                                        </Link>
                                    </div>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='detailContainer2'>
                    <Card sx={{ maxWidth: 820 }}>
                        <CardContent className='misComprasCard1'>
                            <div>
                                <Typography gutterBottom variant='h5' component='div'>
                                    <div className='cardTitle'>
                                        <h4>Curso Instructor de Vuelo</h4>
                                    </div>

                                    <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" />
                                </Typography>
                            </div>
                            <div className='detailContainerCard2'>
                                <Typography variant='body2' color='text.secondary'>
                                    <li className='detailSummary'>Esta licencia te permitirá a instruir alumnos y pilotos hasta el nivel de tu licencia y habilitaciones.</li>
                                    <div>
                                        <Button href="/cursos/instructorvuelo" className="btn6">
                                            Más info
                                        </Button>
                                    </div>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div> */}
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 300,
                                    // backgroundColor: 'rgba(8, 38, 46, 0.247)',
                                    border: '2px solid black'
                                }}
                            >
                                <h4>Curso Piloto Privado de Avión</h4>
                                {/* <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" /> */}
                                <p className='detailSummary'>La licencia de piloto privado de avión con VFR controlado te permitirá volar monomotores de hasta 5.700 Kg de peso máximo de despegue.</p>
                                <Button href="/cursos/pilotoprivado" className="btn6">
                                    Más info
                                </Button>
                                {/* <Chart /> */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 280,
                                    border: '2px solid black'
                                }}
                            >
                                <h4>Curso Piloto Comercial de Avión</h4>
                                {/* <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" /> */}
                                <p className='detailSummary'>La licencia de piloto comercial de avión con HVI te permitirá volar aeronaves comerciales de hasta 5.700 Kg de MTOW.</p>
                                <Button href="/cursos/pilotocomercial" className="btn6">
                                    Más info
                                </Button>
                                {/* <Chart /> */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 270,
                                    border: '2px solid black'
                                }}
                            >
                                <h4>Curso Piloto Comercial de Primera Clase de Avión</h4>
                                {/* <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" /> */}
                                <p className='detailSummary'>La Licencia te habilita como piloto de vuelos comerciales en aeronaves de hasta 20.000 kgs.</p>
                                <Button href="/cursos/pilotocomercialprimeraclase" className="btn6">
                                    Más info
                                </Button>
                                {/* <Chart /> */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                    border: '2px solid black'
                                }}
                            >
                                <h4>Curso Instructor de Vuelo</h4>
                                {/* <img alt='k' className='img' src="https://st4.depositphotos.com/1020091/19993/v/450/depositphotos_199939890-stock-illustration-airplane-silhouette-white-background-vector.jpg" /> */}
                                <p className='detailSummary'>Esta licencia te permitirá a instruir alumnos y pilotos hasta el nivel de tu licencia y habilitaciones.</p>
                                <Button href="/cursos/instructorvuelo" className="btn6">
                                    Más info
                                </Button>
                                {/* <Chart /> */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
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