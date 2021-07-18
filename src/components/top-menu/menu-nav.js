import styles from './menu-nav.module.css';
import useWindowDimensions from '../../hooks/window-dimensions';
import {HashLink as Link} from "react-router-hash-link";


export default function MenuNav(props) {
  const { width } = useWindowDimensions()
  const { menuItems } = props

  return(
    <nav className={width >= 1200 || props.isOpen ? styles.open : styles.closed}>
      <ul>
        {menuItems.map(({text, href}) => {
          return <li key={text}><Link smooth to={href}>{text}</Link></li>
        })}
        <li><a href="tel:66-66-66">66-66-66</a></li>
      </ul>
    </nav>
  )
}
