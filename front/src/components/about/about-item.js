import styles from './about-item.module.css'


export default function AboutItem(props) {
  const {title, paragraph, imageSrc, imageAlt} = props

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={ `${process.env.PUBLIC_URL}/images/${imageSrc}` }
             alt={ imageAlt }/>
      </div>
      <p className={styles.title}>{ title }</p>
      <p className={styles.paragraph}> { paragraph }</p>
    </div>
  )
}