import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
// import components

function App() {
  return (
    <div>
      <Router>
        <Switch exact path="/">
          <Route>
            <Home />
          </Route>
          <Route exact path="/err">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
