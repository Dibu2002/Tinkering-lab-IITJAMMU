import React from "react";
import { Switch,Route, Redirect } from "react-router-dom";
import Mission from './Mission';
import Team from './Team';
import Contact from './Contact';
import Event from './Event';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Canvas from "./Canvas";

let App =
  () => {
    return (
      <>
      <Navbar/>
      <Canvas/>
        <Switch>
          <Route path="/service"  component={Team} />
          <Route path="/about"  component={Event} />
          <Route path="/contact"  component={Contact} />
          <Route path="/"  component={Mission} />
          <Redirect to="/"/>
        </Switch>
      </>
    )
  } 


export default App;