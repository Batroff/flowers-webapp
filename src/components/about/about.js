import styles from './about.module.css'
import React, {useEffect, useState} from "react";
import AboutItem from "./about-item";
import BlueButton from "../buttons/blue-button";

export default function About(props) {

  const [items, setItems] = useState([])

  const [itemsCount, setItemsCount] = useState(() => {
    const width = window.innerWidth

    if (width < 768) {
      return 3
    } else if (width < 1200) {
      return 4
    } else {
      return 6
    }
  })

  useEffect(() => {
    fetch('/api/flowers')  /* local machine -> change to http://localhost:5000/api/flowers */
        .then(res => res.json())
        .then(items => setItems(items), error => console.log(error))
  }, [itemsCount])

  const handleShowMoreClick = () => {
    const increment = 3
    setItemsCount(itemsCount + increment)
  }

  return (
    <section className={styles.container} id={"about"}>
      <div className={[styles.wrapper, 'wrapper'].join(' ')}>
        <h1 className={styles.title}><span className={"text-underline"}>Чем</span> мы<br/>занимаемся?</h1>
        <p className={styles.paragraph}>Наша цветочная ферма - это семейное дело, которое мы начали, чтобы сделать красоту доступной. Мы с особой бережностью и вниманием подходим к выращиванию наших цветов и растений, поэтому можем гарантировать качество и самые лучшие условия работы. Мы сами выращиваем все что предлагаем Вам.</p>
        <hr className={["hr-splitter", styles.splitter].join(' ')}/>

        <div className={styles.items}>
          {items.slice(0, itemsCount).map(({id, title, description, image}) => (
            <AboutItem title={title}
                       description={description}
                       imageSrc={image}
                       imageAlt={title}
                       key={id}/>
          ))}
        </div>
        <BlueButton text={"Посмотреть ещё"}
                    classname={styles.button}
                    onClickHandler={handleShowMoreClick}/>
      </div>
    </section>
  )
}