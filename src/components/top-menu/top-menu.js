import MenuNav from "./menu-nav";
import BurgerBtn from "./burger-btn";
import styles from './top-menu.module.css'
import React, {useState} from "react";


const menuItems = [
  {text: 'О нас', href: '#about'},
  {text: 'Собрать свой букет', href: '#contacts-form'},
  {text: 'Контакты', href: '#contacts'},
]
const logoTitle = 'Lorem ipsum'

export default function TopMenu() {
  const [isOpen, handleOpen] = useState(false)

  const handleChange = () => {
    handleOpen(!isOpen)
    document.body.classList.toggle('menu-open')
}

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{logoTitle}</h3>
      <BurgerBtn isOpen={isOpen} handler={handleChange}/>

      <MenuNav menuItems={menuItems} handler={handleChange} isOpen={isOpen}/>
    </section>
  )
}
