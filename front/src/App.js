import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import TopMenu from "./components/top-menu/top-menu";

function App() {
  return (
    <Router>
      <main className={styles.main}>
        <Route path={'*'} component={TopMenu}/>
        <Route path={'/'} component={Home}/>
        <Route path={'*'} component={Footer}/>
      </main>
    </Router>
  );
}

export default App;
