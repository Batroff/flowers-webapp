import styles from './contact-form.module.css'
import Input from "../inputs/input";
import PhoneInput from "../inputs/phone-input";
import image320 from './bg-320.png'
import image480 from './bg-480.png'
import image768 from './bg-768.png'
import image1200 from './bg-1200.png'
import BlueButton from "../buttons/blue-button";


export default function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.left}>
          <h1 className={styles.title}>Собери<br/><span className={"text-blue"}>свой</span> букет</h1>
          <p className={styles.paragraph}>Integer dictum quis nibh tincidunt semper. Aliquam sed mi felis. Etiam vitae ipsum eu mauris dictum faucibus. Etiam a accumsan eros. Donec ut tempor leo.</p>
        </div>

        <form action="" className={styles.form}>
          <div className={styles.input_wrapper}>
            <Input id={"name"}
                   type={"text"}
                   name={"name"}
                   text={"Имя:"}
                   placeholder={"Введите имя"}
                   classname={styles.input}/>

            <PhoneInput id={"phone"}
                        type={"tel"}
                        name={"phone"}
                        text={"Телефон:"}
                        placeholder={"Введите телефон"}
                        classname={styles.input}/>
          </div>
          <BlueButton text={"Собрать"} classname={styles.button}/>
        </form>
      </div>

      <picture className={"background"}>
        <source srcSet={image1200} media={"(min-width: 1200px)"}/>
        <source srcSet={image768} media={"(min-width: 768px)"}/>
        <source srcSet={image480} media={"(min-width: 480px)"}/>
        <img src={image320} alt={""}/>
      </picture>
    </section>
  )
}