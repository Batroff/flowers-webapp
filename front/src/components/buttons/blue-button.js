import './blue-button.css'

export default function BlueButton(props) {
  const { text, classname } = props

  return (
    <button type={"button"} className={`blue-btn ${classname}`}>{ text }</button>
  )
}