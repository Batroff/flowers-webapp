import styles from './burger-btn.module.css'


export default function BurgerBtn(props) {
  return (
    <div className={props.isOpen ? styles.open : styles.closed}
         id={styles.container}
         onClick={() => props.handler(!props.isOpen)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}