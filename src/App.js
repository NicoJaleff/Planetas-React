import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Detalle from "./components/Detalle";
import MenuDeOpciones from "./components/MenuDeOpciones";
import Ordenados from "./components/Ordenados";

class App extends Component {
  render() {
    return (
      <div>
        <MenuDeOpciones></MenuDeOpciones>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/detallePlaneta/:id" component={Detalle}></Route>
          <Route path="/home/:type/:nombre" component={Home}></Route>
          <Route path="/Ordenados" component={Ordenados}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
