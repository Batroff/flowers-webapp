import styles from "../../App.css";
import Header from "../header/header";
import About from "../about/about";
import ContactForm from "../contact-form/contact-form";
import Contacts from "../contacts/contacts";
import React from "react";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <About/>
      <ContactForm/>
      <Contacts/>
    </main>
  )
}