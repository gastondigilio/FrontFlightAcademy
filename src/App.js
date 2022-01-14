import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import Estudiantes from './components/Estudiantes/estudiantes';
import SobreNosotros from './components/sobreNosotros/sobreNosotros';
import Galeria from './components/galeria/galeria';
import PoliticaPrivacidad from './components/politicaPrivacidad/politicaPrivacidad';
import PoliticaCookies from './components/politicaCookies/politicaCookies';
import AvisoLegal from './components/avisoLegal/avisoLegal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path='/cursos' component={Cursos} />
          <Route exact path='/cursos/piloto-privado' component={PilotoPrivado} />
          <Route exact path='/cursos/piloto-comercial' component={PilotoComercial} />
          <Route exact path='/cursos/piloto-comercial-primera-clase' component={PilotoComercialPrimera} />
          <Route exact path='/cursos/instructor-vuelo' component={InstructorVuelo} />
          <Route exact path='/estudiantes' component={Estudiantes} />
          <Route exact path='/sobre-nosotros' component={SobreNosotros} />
          <Route exact path='/galeria' component={Galeria} />
          <Route exact path='/politica-privacidad' component={PoliticaPrivacidad} />
          <Route exact path='/politica-cookies' component={PoliticaCookies} />
          <Route exact path='/aviso-legal' component={AvisoLegal} />
          <Route exact path="/perfil" component={Perfil} /> 
          <Route exact path="/register" component={Register} />

          {/* <Route path="/home" components={{main: Home, sidebar: Navbar}} /> */}
          {/* <Route exact path='/home' component={Navbar} /> */}
          {/* <Route path='/home'>
          <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
        <Route exact path='/detail/:id' component={Detail} />
        <Route path='/carrito/:id' component={ShopingCart} />
        <Route path='/favorites' component={Favorite} />
        <Route path='/pago' component={GoShopping} />
        <Route path='/perfil' component={Perfil} />
        <Route path='/tarjeta' component={Pago} />
        <Route path='/checkout' component={Checkuot} />
        <Route path='/misCompras' component={MisCompras} />
        <Route path='/realizado' component={Realizado} />
        <Route path='/aboutUs' component={aboutUs} />
        <Route path='*' component={DefaultError} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
