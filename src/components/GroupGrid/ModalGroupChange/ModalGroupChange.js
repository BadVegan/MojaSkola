import React, { Component } from 'react';
import { Button, Modal, Dropdown } from 'semantic-ui-react';
import './ModalGroupChange.css';
import { connect } from 'react-redux';
import { changeGroup } from './../../../store/actions/actionsGroup';

class ModalGroupChange extends Component {
  state = {
    groups: [
      { key: 1, value: 1, text: 'Grupa A' },
      { key: 2, value: 2, text: 'Grupa B' },
      { key: 3, value: 3, text: 'Grupa C' },
      { key: 4, value: 4, text: 'Grupa D' },
      { key: 5, value: 5, text: 'Grupa E' },
      { key: 6, value: 6, text: 'Grupa F' },
      { key: 7, value: 7, text: 'Grupa G' }
    ],
    selectedGroup: null
  };

  handleComboSelection = (event, obj) => {
    this.setState({
      selectedGroup: obj.value
    });
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <Modal size="mini" open={this.props.show} onClose={this.props.onClose}>
        <Modal.Header>Wybierz nową grupę dla: {this.props.student.name + ' ' + this.props.student.surname}</Modal.Header>
        <Modal.Content className="modalContetn">
          <Dropdown placeholder="Wybierz grupę" search selection options={this.state.groups} onChange={this.handleComboSelection} />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.props.onClose}>
            Anuluj
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Zapisz"
            onClick={() => this.props.onChangeGroup(this.state.selectedGroup, this.props.student.id)}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeGroup: (idGroup, idStudent) => dispatch(changeGroup(idGroup, idStudent))
  };
};
export default connect(null, mapDispatchToProps)(ModalGroupChange);
