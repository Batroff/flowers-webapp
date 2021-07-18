import styles from './App.module.css';

import React from "react";
import TopMenu from "./components/top-menu/top-menu";
import Header from "./components/header/header";
import About from "./components/about/about";
import ContactForm from "./components/contact-form/contact-form";
import Contacts from "./components/contacts/contacts";

function App() {
  return (
    <div className="App">
      <main className={styles.main}>
        <TopMenu/>
        <Header/>
        <About/>
        <ContactForm/>
        <Contacts/>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}

export default App;
