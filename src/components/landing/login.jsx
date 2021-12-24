// import React from 'react';
// import './landing.css';
// import { InputGroup, Input, Button, Media, ButtonGroup, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, UncontrolledCarousel } from 'reactstrap';
// import foto5 from '../../images/foto5.gif';

// export default function Login(){
//     return(
//         <div className="contenedorLogin">
//                 <h4>Bienvenidos</h4>
//                 <h5>Inicie sesión para continuar</h5>
//                 <Media>
//                     <Media left href="#">
//                         <Media
//                             object
//                             src=
//                             {foto5}
//                             alt="cat"
//                         />
//                     </Media>
//                 </Media>
//                 <br />
//                 <InputGroup>
//                     <Input placeholder="Usuario" />
//                 </InputGroup>
//                 <br />
//                 <InputGroup>
//                     <Input placeholder="Contraseña" />
//                 </InputGroup>
//                 <br />
//                 <div className="contenedorBoton">
//                     <ButtonGroup>
//                         <div className="boton">
//                             <Button
//                                 color="primary"
//                                 outline
//                             >
//                                 Iniciar sesión
//                             </Button>
//                         </div>
//                         <br />
//                         <div className="boton1">
//                             <Button
//                             color='primary'
//                                 outline
//                             >
//                                 Registrarme
//                             </Button>
//                         </div>
//                     </ButtonGroup>
//                 </div>
//             </div>
//     )
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import foto4 from '../../images/foto4.png';
import foto5 from '../../images/foto5.gif';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Flight academy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    //   <div className="contenedorLogin">
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1 }}>
              {/* <LockOutlinedIcon /> */}
              <img src={foto5} /> 
              {/* Foto avatar usuarios */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Flight Academy
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email o usuario"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Mantener sesión iniciada"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesion
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Se olvidó la contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Registrarse"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    // </div>
  );
}