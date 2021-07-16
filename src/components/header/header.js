import styles from './header.module.css'
import BlueButton from "../buttons/blue-button";


const buttonText = 'Купить'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={[styles.wrapper, 'wrapper'].join(' ')}>
        <h1 className={styles.title}><span className="text-blue">Maecenas</span> euismod,<br/>dui eget iaculis egestas</h1>
        <p className={styles.paragraph}>Phasellus faucibus tellus nec porttitor cursus. Aenean pellentesque neque.</p>
        <BlueButton text={buttonText}/>
      </div>
    </header>
  )
}