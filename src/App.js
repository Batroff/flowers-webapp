import React from "react";
import styles from './App.module.css';
import TopMenu from "./components/top-menu/top-menu";
import Header from "./components/header/header";
import About from "./components/about/about";

function App() {
  document.title = 'testing'

  return (
    <div className="App">
      <main className={styles.main}>
        <TopMenu/>
        <Header/>
        <About/>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}

export default App;
