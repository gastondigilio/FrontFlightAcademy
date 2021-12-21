import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./components/navBar/navBar";
import Landing from "./components/landing/landing";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
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
