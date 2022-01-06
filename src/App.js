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
          <Route exact path='/cursos/pilotoprivado' component={PilotoPrivado} />
          <Route exact path='/cursos/pilotocomercial' component={PilotoComercial} />
          <Route exact path='/cursos/pilotocomercialprimeraclase' component={PilotoComercialPrimera} />
          <Route exact path='/cursos/instructorvuelo' component={InstructorVuelo} />
          <Route exact path='/estudiantes' component={Estudiantes} />
          <Route exact path='/sobrenosotros' component={SobreNosotros} />
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
