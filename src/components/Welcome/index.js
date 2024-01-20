// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const buttonText = isClicked ? 'Subscribed' : 'Subscribe'
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
