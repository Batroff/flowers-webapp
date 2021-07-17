import React from "react";
import'./input.css'


export default class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onFocusHandler = this.onFocusHandler.bind(this)
  }

  onFocusHandler() {

  }

  onChangeHandler(e) {
    e.preventDefault()
    this.setState({value: e.target.value})
  }

  render() {
    const {id, type, name, text, classname, placeholder} = this.props

    return (
      <div className={`${typeof classname != 'undefined' ? classname : ''} container`}>
        <label htmlFor={id} className={'label'}>{text}</label>
        <input type={type}
               name={name}
               id={id}
               onChange={this.onChangeHandler}
               onFocus={this.onFocusHandler}
               value={this.state.value}
               placeholder={placeholder}
               className={'input'}/>
      </div>
    )
  }
}