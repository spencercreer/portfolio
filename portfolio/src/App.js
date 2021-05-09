import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Webdev from "./pages/Webdev";
import Engineering from "./pages/Engineering";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/landing"]}>
            <Landing />
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

export default App;
