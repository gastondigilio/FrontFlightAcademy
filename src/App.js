import React from "react";
import Home from "./components/home/home";
import Login from "./components/landing/login";
import Perfil from "./components/perfil/perfil";
import Register from "./components/register/register";
import Landing from "./components/landing/landing";
import Cursos from "./components/cursos/cursos";
import PilotoPrivado from './components/cursos/cursoPilotoPrivado/pilotoPrivado';
import PilotoComercial from './components/cursos/cursoPilotoComercial/pilotoComercial';
import PilotoComercialPrimera from './components/cursos/cursoPilotoComercialPrimera/pilotoComercialPrimera';
import InstructorVuelo from './components/cursos/cursoInstructorVuelo/instructorVuelo';
import InstructorSimulador from './components/cursos/cursoInstructorSimulador/intructorSimulador';
import Estudiantes from './components/Estudiantes/estudiantes';
import SobreNosotros from './components/sobreNosotros/sobreNosotros';
import Galeria from './components/galeria/galeria';
import PoliticaPrivacidad from './components/politicaPrivacidad/politicaPrivacidad';
import PoliticaCookies from './components/politicaCookies/politicaCookies';
import AvisoLegal from './components/avisoLegal/avisoLegal';
import MisTurnos from './components/vuelos/misTurnos/misTurnos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path='/cursos' element={<Cursos/>} />
            <Route path='/cursos/piloto-privado' element={<PilotoPrivado/>} />
            <Route path='/cursos/piloto-comercial' element={<PilotoComercial/>} />
            <Route path='/cursos/piloto-comercial-primera-clase' element={<PilotoComercialPrimera/>} />
            <Route path='/cursos/instructor-vuelo' element={<InstructorVuelo/>} />
            <Route path='/cursos/instructor-simulador' element={<InstructorSimulador/>} />
            <Route path='/estudiantes' element={<Estudiantes/>} />
            <Route path='/sobre-nosotros' element={<SobreNosotros/>} />
            <Route path='/galeria' element={<Galeria/>} />
            <Route path='/politica-privacidad' element={<PoliticaPrivacidad/>} />
            <Route path='/politica-cookies' element={<PoliticaCookies/>} />
            <Route path='/aviso-legal' element={<AvisoLegal/>} />
            <Route path="/perfil" element={<Perfil/>} /> 
            <Route path="/register" element={<Register/>} />
            <Route path='/mis-turnos' element={<MisTurnos/>} />

            {/* <Route path="/home" components={{main: Home, sidebar: Navbar}} /> */}
            {/* <Route path='/home' element={Navbar} /> */}
            {/* <Route path='/home'>
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Route>
          <Route path='/detail/:id' element={Detail} />
          <Route path='/carrito/:id' element={ShopingCart} />
          <Route path='/favorites' element={Favorite} />
          <Route path='/pago' element={GoShopping} />
          <Route path='/perfil' element={Perfil} />
          <Route path='/tarjeta' element={Pago} />
          <Route path='/checkout' element={Checkuot} />
          <Route path='/misCompras' element={MisCompras} />
          <Route path='/realizado' element={Realizado} />
          <Route path='/aboutUs' element={aboutUs} />
          <Route path='*' element={DefaultError} /> */}
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
