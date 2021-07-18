import styles from './contacts.module.css'
import ContactsItem from "./contacts-item";
import emailImage from './email.svg'
import phoneImage from './phone.svg'
import locationImage from './location.svg'


export default function Contacts() {
  return (
    <section className={styles.container} id={"contacts"}>
      <div className={`wrapper ${styles.wrapper}`}>
        <h1 className={styles.title}>Мы <span className={"text-blue"}>всегда</span><br/>готовы помочь</h1>
        <hr className={`hr-splitter ${styles.splitter}`}/>

        <h2 className={styles.subtitle}>Контакты</h2>
        <div className={styles.contacts}>
          <ContactsItem imageSrc={phoneImage} imageAlt={"Телефон"} text={"55-55-55"}/>
          <ContactsItem imageSrc={emailImage} imageAlt={"Почта"} text={"flowers@site.ru"}/>
        </div>

        <hr className={`hr-splitter ${styles.splitter}`}/>
        <h2 className={styles.subtitle}>Адрес</h2>
        <div className={styles.address}>
          <ContactsItem imageSrc={locationImage} imageAlt={"Адрес"} text={"г. Курск, ул. Ленина 55"}/>
        </div>
      </div>
    </section>
  )
}