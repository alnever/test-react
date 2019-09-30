import React, {Component} from 'react';
import './Menu.css';
import { MenuItem } from '../menu-item/MenuItem';

export class Menu extends Component {
  constructor(props) {
      super(props);
      this.setActiveItem = this.setActiveItem.bind(this);
      this.state = {
        activeItem: ""
      };
  }

  setActiveItem = (item) => {
    this.setState({activeItem: item});
  }

  render() {
    return (
      <div class="menu">
        <MenuItem id="menu_item_home"
          title="Home"
          path="#"
          setActive={this.setActiveItem}
          active={this.state.activeItem === "menu_item_home"} />

        <MenuItem id="menu_item_impression"
          title="Impression"
          path="#"
          setActive={this.setActiveItem}
          active={this.state.activeItem === "menu_item_impression"} />

        <MenuItem id="menu_item_about"
          title="About"
          path="#"
          setActive={this.setActiveItem}
          active={this.state.activeItem === "menu_item_about"} />

        <MenuItem id="menu_item_contacts"
          title="Contacts"
          path="#"
          setActive={this.setActiveItem}
          active={this.state.activeItem === "menu_item_contacts"} />
      </div>
    );
  }
}
