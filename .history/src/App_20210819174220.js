import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Error from './pages/Error'
import Nav

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
