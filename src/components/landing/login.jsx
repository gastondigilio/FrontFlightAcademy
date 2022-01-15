import './landing.css';
import React, {useState, useEffect} from 'react';
import {loginUser} from '../../redux/actions/index.jsx';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import foto4 from '../../images/foto4.png';
import foto6 from '../../images/foto6.png';
import Register from '../register/register'



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
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin)

  
  const [input, setInput] = useState({
    pass: "",
    email: "",
  })
  const [islogin, setIslogin] = useState(false)



  const handleInputChange = function (e) {
    console.log( e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if(input.email && input.pass){
      dispatch(loginUser(input));
    
   
    setTimeout(() => {
      
      if(userLogin.id){
        history.push("/home")
        setInput({
          pass: "",
          email: "",
        });
        console.log("se logeo")
      }else {
        setInput({
      pass: "",
      email: "",
    });
        alert("Las Credenciales no coinciden ")
      }
    
    }, 3000);
    }else{
      alert("rellene los campos")
    }
    
    
  }
  return (
    //   <div className="contenedorLogin">
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${foto4})`,
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
                <img src={foto6} />
                {/* Foto avatar usuarios */}
              </Avatar>
              <Typography component="h1" variant="h5">
                Flight Academy
              </Typography>
              <Box component="form" noValidate onSubmit={e => handleSubmit(e)} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="pass"
                  label="Contraseña"
                  type="password"
                  id="pass"
                  onChange={handleInputChange}
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
                    <Link href="#" variant="body2" style={{ textDecoration: 'none' }}>
                      <div className="btnLogIn">
                        Se olvidó la contraseña?
                      </div>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2" style={{ textDecoration: 'none' }}>
                      <div className="btnLogIn">
                        {"Registrarse"}
                      </div>
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Link href="/">
        <button className='botonVolverLogin'>
          Volver
        </button>
      </Link>
    </div>
  );
}

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { UncontrolledCarousel } from 'reactstrap';
// import fotoModificada1 from '../../images/fotoModificada1.png';
// import foto2 from '../../images/foto2.png';
// import foto3 from '../../images/foto3.png';
// import foto4 from '../../images/foto4.png';
// import './landing.css';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <div className="prueba">
//       <div className="carousel">
//       <UncontrolledCarousel
//         items={[
//           {

//             key: 1,
//             src: fotoModificada1
//           },
//           {

//             key: 2,
//             src: foto2
//           },
//           {

//             key: 3,
//             src: foto3
//           },
//           {
//             key: 4,
//             src: foto4
//           }
//         ]}
//       />
//       </div>
//       <div className="logInContainer">
//       <ThemeProvider theme={theme}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//           <Copyright sx={{ mt: 8, mb: 4 }} />
//         </Container>
//       </ThemeProvider>
//       </div>
//     </div>
//   );
// }