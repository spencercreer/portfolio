import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/landing"]}>
            <Landing />
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
