import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import ModalWindow from './../ModalGroupChange/ModalGroupChange';

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

class DropdownExampleDropdown extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleGroupSelect = (event, prop) => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <Dropdown icon="tasks">
          <Dropdown.Menu>
            <Dropdown.Item icon="search" text="Szczgóły" />
            <Dropdown.Item icon="group" text="Zmien grupę" onClick={this.toggleModal} />
            <Dropdown.Divider />
            <Dropdown.Item icon="trash" text="Usuń" />
          </Dropdown.Menu>
        </Dropdown>

        <ModalWindow show={this.state.isOpen} onClose={this.toggleModal} />
      </div>
    );
  }
}

export default DropdownExampleDropdown;
