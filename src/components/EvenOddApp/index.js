// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state

    const type = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="title">
          Count <spam className="spam">{number}</spam>
        </h1>
        <p className="para">
          Count is <spam className="para-spam">{type}</spam>
        </p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="last-line">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
