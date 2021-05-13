import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Webdev from "./pages/Webdev/Webdev";
import Engineering from "./pages/Engineering/Engineering";
import Resume from "./pages/Resume/Resume";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/web-development"}>
            <Webdev />
          </Route>
          <Route exact path={"/engineering"}>
            <Engineering />
          </Route>
          <Route exact path={"/resume"}>
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
