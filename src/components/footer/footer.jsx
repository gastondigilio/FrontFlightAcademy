import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "./footer.css";
import WhatsappIcon from '../../images/WhatsappIcon.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
    return (
        <div>
            <footer sx={{ bgcolor: "yellow" }}>
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 2 }}
                    bgcolor='text.secondary'
                    color='white'
                    sx={{ bgcolor: "#4527a0" }}
                >
                    <Container maxWidth='lg'>
                        <Grid container spacing={12}>
                            <Grid item xs={9} sm={3} mt={5}>
                                <div className='footerTitle'>
                                    <Box>Flight Academy</Box>
                                </div>
                                <Box mt={2} sm={10}>
                                    Escuela de Vuelo y servicios aéreos, Aeródromo de Morón (SADM / MOR), Buenos Aires, Argentina.
                                </Box>
                                <Box mt={4}>
                                    Centro de Instrucción y Entrenamiento (CIAC) Tipo 3 certificado por ANAC.
                                </Box>
                            </Grid>
                            <Grid item xs={9} sm={3} mt={5}>
                                <div className="footerTitle">
                                    <Box>Contacto</Box>
                                </div>
                                <Box mt={2}>
                                    <img src={WhatsappIcon} width={20} />
                                    +54 9 11 5481 2986
                                </Box>
                                <Box mt={1}>
                                    < MailOutlineIcon />
                                    <Link href='mailto:gastondigilio@gmail.com' color='inherit'>
                                        gastondigilio@gmail.com
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={9} sm={3} mt={5}>
                                <div className="footerTitle">
                                <Box>Más Información</Box>
                                </div>
                                <Box sx={{ mt: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                                    <Box>
                                        <Link href='/asdsa' color='inherit'>
                                            <i className='fa fa-twitter'></i>
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link href='/asdsa' color='inherit'>
                                            <i className='fa fa-facebook'></i>
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link href='/asdsa' color='inherit'>
                                            <i className='fa fa-instagram'></i>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={9} sm={3} mt={5}>
                                <div className="footerTitle">
                                <Box>Seguinos en</Box>
                                </div>
                                <Box mt={2}>
                                    <Link href='/asdsa' color='inherit'>
                                        
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box textAlign='center' pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
                            <Link href="#" color="inherit">
                                {' Política de privacidad |'}
                            </Link>
                            <Link href="#" color="inherit">
                                {' Política de cookies |'}
                            </Link>
                            <Link href="#" color="inherit">
                                {' Aviso legal '}
                            </Link>
                        </Box>
                    </Container>
                </Box>
            </footer>
        </div>
    );
}