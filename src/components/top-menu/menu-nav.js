import styles from './menu-nav.module.css';
import useWindowDimensions from '../../hooks/window-dimensions';


export default function MenuNav(props) {
  const { width } = useWindowDimensions()

  return(
    <nav className={width >= 1200 || props.isOpen ? styles.open : styles.closed}
         id={styles.nav}>
      <ul>
        {props.menuItems.map(element => {
          return <li key={element}><a href="#">{element}</a></li>
        })}
      </ul>
    </nav>
  )
}
