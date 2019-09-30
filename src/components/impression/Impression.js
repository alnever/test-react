import React, {Component} from 'react';
import './Impression.css';

export class Impression extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userName: 'stranger'
      };
  }

  render() {
    return (
      <div class="impression">
        <label for="user_name">Your name</label>
        <input id="user_name"  onChange= {(e) => this.changeUserName(e.target.value)}/>
        <p>Hello {this.state.userName}! Just click Submit button to sent your review!</p>
        <button onClick={this.click}>Click me!</button>
      </div>
    );
  }

  changeUserName = (value) => {
    this.setState({userName: value});
  }

  click = () => {}
}
