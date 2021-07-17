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
    this.setState({
      items: [
        {
          title: 'Some title1',
          paragraph: 'Cras sodales ac purus id congue. Nullam ac scelerisque diam. Maecenas ut blandit velit. Etiam mi neque, consequat in ex sit amet, semper varius quam.',
          imageSrc: 'about-item-image.jpg',
          imageAlt: 'flower1'
        },
        {
          title: 'Another title2',
          paragraph: 'Cras sodales ac purus id congue. Nullam ac scelerisque diam. Maecenas ut blandit velit. Etiam mi neque, consequat in ex sit amet, semper varius quam.',
          imageSrc: 'about-item-image.jpg',
          imageAlt: 'flower2'
        },
        {
          title: 'Some title3',
          paragraph: 'Cras sodales ac purus id congue. Nullam ac scelerisque diam. Maecenas ut blandit velit. Etiam mi neque, consequat in ex sit amet, semper varius quam.',
          imageSrc: 'about-item-image.jpg',
          imageAlt: 'flower3'
        },
        {
          title: 'Another title4',
          paragraph: 'Cras sodales ac purus id congue. Nullam ac scelerisque diam. Maecenas ut blandit velit. Etiam mi neque, consequat in ex sit amet, semper varius quam.',
          imageSrc: 'about-item-image.jpg',
          imageAlt: 'flower4'
        },
        {
          title: 'Another title5',
          paragraph: 'Cras sodales ac purus id congue. Nullam ac scelerisque diam. Maecenas ut blandit velit. Etiam mi neque, consequat in ex sit amet, semper varius quam.',
          imageSrc: 'about-item-image.jpg',
          imageAlt: 'flower5'
        },
        {
          title: 'Another title6',
          paragraph: 'Cras sodales ac purus id congue. Nullam ac scelerisque diam. Maecenas ut blandit velit. Etiam mi neque, consequat in ex sit amet, semper varius quam.',
          imageSrc: 'about-item-image.jpg',
          imageAlt: 'flower6'
        },
      ]
    })
  }

  render() {
    const { items } = this.state

    return (
      <section className={styles.container}>
        <div className={[styles.wrapper, 'wrapper'].join(' ')}>
          <h1 className={styles.title}><span className={"text-underline"}>Чем</span> мы<br/>занимаемся?</h1>
          <p className={styles.paragraph}>Nullam rhoncus eu ligula non feugiat. Praesent et risus ut justo molestie
            posuere. Nulla urna turpis, condimentum non consectetur nec, fringilla et turpis. Pellentesque finibus, elit
            at facilisis suscipit</p>
          <hr className={["hr-splitter", styles.splitter].join(' ')}/>

          <div className={styles.items}>
            {items.map(({title, paragraph, imageSrc, imageAlt}) => (
              <AboutItem title={title}
                         paragraph={paragraph}
                         imageSrc={imageSrc}
                         imageAlt={imageAlt}
                         key={title}/>
            ))}
          </div>
          <BlueButton text={"Посмотреть ещё"}
                      classname={styles.button}/>
        </div>
      </section>
    )
  }
}