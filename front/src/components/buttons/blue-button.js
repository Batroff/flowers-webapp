import './blue-button.css'

export default function BlueButton(props) {
  const { text, classname, onClickHandler } = props

  return (
    <button type={"button"} className={`blue-btn ${classname}`} onClick={onClickHandler}>{ text }</button>
  )
}