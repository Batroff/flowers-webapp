import styles from './about.module.css'
import React from "react";
import AboutItem from "./about-item";
import BlueButton from "../buttons/blue-button";

export default class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/flowers')
        .then(res => res.json())
        .then(items => {
          this.setState({
            items: items
              })
            },
            error => console.log(error)
        )
  }

  render() {
    const { items } = this.state

    return (
      <section className={styles.container} id={"about"}>
        <div className={[styles.wrapper, 'wrapper'].join(' ')}>
          <h1 className={styles.title}><span className={"text-underline"}>Чем</span> мы<br/>занимаемся?</h1>
          <p className={styles.paragraph}>Nullam rhoncus eu ligula non feugiat. Praesent et risus ut justo molestie
            posuere. Nulla urna turpis, condimentum non consectetur nec, fringilla et turpis. Pellentesque finibus, elit
            at facilisis suscipit</p>
          <hr className={["hr-splitter", styles.splitter].join(' ')}/>

          <div className={styles.items}>
            {items.map(({id, title, description, image}) => (
              <AboutItem title={title}
                         description={description}
                         imageSrc={image}
                         imageAlt={title}
                         key={id}/>
            ))}
          </div>
          <BlueButton text={"Посмотреть ещё"}
                      classname={styles.button}/>
        </div>
      </section>
    )
  }
}