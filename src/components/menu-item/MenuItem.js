import React, {Component} from 'react';
import './MenuItem.css';

export class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        class={"menu-item " + (this.props.active === true ? 'active' : 'not-active')}
        onClick={(e) => this.click(this.props.id)}>
        <a href={this.props.path}>{this.props.title}</a>
      </div>
    );
  }

  click = (e) => {
    this.props.setActive(e);
  }
}
