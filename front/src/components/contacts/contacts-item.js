import styles from './contacts-item.module.css'


export default function ContactsItem(props) {
  const {imageSrc, imageAlt, text} = props

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imageSrc} alt={imageAlt}/>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}