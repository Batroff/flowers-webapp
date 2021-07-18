import styles from './header.module.css'
import BlueButton from "../buttons/blue-button";
import image1200 from "./bg-1200.png";
import image768 from "./bg-768.png";
import image480 from "./bg-480.png";
import image320 from "./bg-320.png";


const buttonText = 'Купить'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={[styles.wrapper, 'wrapper'].join(' ')}>
        <h1 className={styles.title}><span className="text-blue">Maecenas</span> euismod,<br/>dui eget iaculis egestas</h1>
        <p className={styles.paragraph}>Phasellus faucibus tellus nec porttitor cursus. Aenean pellentesque neque.</p>
        <BlueButton text={buttonText}/>
      </div>

      <picture className="background">
        <source srcSet={image1200} media={"(min-width: 1200px)"}/>
        <source srcSet={image768} media={"(min-width: 768px)"}/>
        <source srcSet={image480} media={"(min-width: 480px)"}/>
        <img src={image320} alt={""}/>
      </picture>
    </header>
  )
}