import styles from './footer.module.css'
import {ReactComponent as TgLogo} from './tg.svg'
import {ReactComponent as VkLogo} from './vk.svg'
import image1200 from "./bg-1200.png";
import image768 from "./bg-768.png";
import image480 from "./bg-480.png";
import image320 from "./bg-320.png";


export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={`wrapper ${styles.wrapper}`}>
        <h1 className={styles.title}>Мы в<br/><span className={"text-blue"}>социальных</span> сетях</h1>
        <div className={styles.items}>
          <a href="#" className={styles.image}><TgLogo width={'100%'} height={'100%'}/></a>
          <a href="#" className={styles.image}><VkLogo width={'100%'} height={'100%'}/></a>
        </div>
      </div>

      <picture className={`background ${styles.background}`}>
        <source srcSet={image1200} media={"(min-width: 1200px)"}/>
        <source srcSet={image768} media={"(min-width: 768px)"}/>
        <source srcSet={image480} media={"(min-width: 480px)"}/>
        <img src={image320} alt={""}/>
      </picture>
    </footer>
  )
}