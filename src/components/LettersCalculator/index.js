import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  letterChange = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state

    return (
      <div className="container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="calculator-box">
          <h1 className="main-heading">Calculate the Letters you Enter</h1>
          <label className="label" htmlFor="inputBox">
            Enter the phrase
          </label>
          <input
            onChange={this.letterChange}
            value={word}
            type="text"
            id="inputBox"
          />
          <div className="display-count">
            <p>No.of letters: {word.length}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
