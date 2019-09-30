import React, {Component} from 'react';
import './Header.css';
import { Menu } from '../menu/Menu';

export class Header extends Component {
  render() {
    return (
      <div class="header">
        <Menu />
      </div>
    );
  }
}
