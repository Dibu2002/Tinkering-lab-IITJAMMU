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
      {/* <Canvas/> */}
        <Switch>
          <Route path="/Tinkering-lab-IITJAMMU/team"  component={Team} />
          <Route path="/Tinkering-lab-IITJAMMU/events"  component={Event} />
          <Route path="/Tinkering-lab-IITJAMMU/contact"  component={Contact} />
          <Route path="/Tinkering-lab-IITJAMMU"  component={Mission} />
          <Redirect to="/Tinkering-lab-IITJAMMU"/>
        </Switch>
      </>
    )
  } 


export default App;