import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import ModalWindow from './../ModalGroupChange/ModalGroupChange';

class PersonDropdown extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let modalWindow = <ModalWindow show={this.state.isOpen} onClose={this.toggleModal} student={this.props.student} />;
    if (!this.state.isOpen) {
      modalWindow = null;
    }
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
        {modalWindow}
      </div>
    );
  }
}

export default PersonDropdown;
