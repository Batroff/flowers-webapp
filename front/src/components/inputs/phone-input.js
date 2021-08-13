import Input from "./input";


const regex = new RegExp('[()+\\-\\s]', 'ig')

export default class PhoneInput extends Input {

  onFocusHandler() {
    if (this.state.value === '') {
      this.setState({value: '+'})
    }
  }

  onChangeHandler(e) {
    e.preventDefault()

    const value = e.target.value
    if (!this.isPhoneCorrect(value)) {
      return
    }

    this.setState({value: value})
  }

  isPhoneCorrect(data) {
    const phone = data.replace(regex, '')
    return phone === '' || !isNaN(parseInt(phone)) || phone.length < 12;
  }
}