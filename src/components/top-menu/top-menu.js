import MenuNav from "./menu-nav";
import BurgerBtn from "./burger-btn";
import styles from './top-menu.module.css'
import React, {useState} from "react";


const menuItems = ['О нас', 'Собрать свой букет', 'Контакты', '66-66-66']
const logoTitle = 'Lorem ipsum'

export default function TopMenu() {
  const [isOpen, handleOpen] = useState(false)

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{logoTitle}</h3>
      <BurgerBtn isOpen={isOpen} handler={handleOpen}/>

      <MenuNav menuItems={menuItems} isOpen={isOpen}/>
    </section>
  )
}
