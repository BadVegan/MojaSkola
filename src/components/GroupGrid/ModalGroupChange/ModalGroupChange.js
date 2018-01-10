import React, { Component } from 'react';
import { Button, Modal, Dropdown } from 'semantic-ui-react';

class ModalGroupChange extends Component {
  state = {
    groups: [
      { id: 1, value: 'Grupa A', text: 'Grupa A' },
      { id: 2, value: 'Grupa B', text: 'Grupa B' },
      { id: 3, value: 'Grupa C', text: 'Grupa C' },
      { id: 4, value: 'Grupa D', text: 'Grupa D' },
      { id: 5, value: 'Grupa E', text: 'Grupa E' },
      { id: 6, value: 'Grupa F', text: 'Grupa F' },
      { id: 7, value: 'Grupa G', text: 'Grupa G' }
    ]
  };

  handleComboSelection = (event, obj) => {
    console.log(event);
    console.log(obj);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <Modal size="small" open={this.props.show} onClose={this.props.onClose}>
        <Modal.Header>Wybierz nową grupę</Modal.Header>
        <Modal.Content>
          <Dropdown placeholder="Wybierz grupę" fluid search selection options={this.state.groups} onChange={this.handleComboSelection} />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.props.onClose}>
            Anuluj
          </Button>
          <Button positive icon="checkmark" labelPosition="right" content="Zapisz" />
        </Modal.Actions>
      </Modal>
    );
  }
}
export default ModalGroupChange;
