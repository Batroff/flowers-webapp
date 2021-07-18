import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import TopMenu from "./components/top-menu/top-menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={'*'} component={TopMenu}/>
        <Route path={'/'} component={Home}/>
        <Route path={'*'} component={Footer}/>
      </div>
    </Router>
  );
}

export default App;
