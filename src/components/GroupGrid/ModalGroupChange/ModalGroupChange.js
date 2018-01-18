import React, {Component} from 'react';
import {Button, Modal, Dropdown} from 'semantic-ui-react';
import './ModalGroupChange.css';
import {connect} from 'react-redux';
import {changeGroupHttp} from './../../../store/actions/actionsGroup';
import {fetchGroupsNameHttp} from "../../../store/actions/actionsGroup";

class ModalGroupChange extends Component {

    state = {
        groups: [],
        selectedGroup: null
    };

    componentDidMount() {
        this.props.getsGroupsName();
    }

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
                <Modal.Header>Wybierz nową grupę
                    dla: {this.props.student.name + ' ' + this.props.student.surname}</Modal.Header>
                <Modal.Content className="modalContetn">
                    <Dropdown placeholder="Wybierz grupę" search selection options={this.props.groupsName}
                              onChange={this.handleComboSelection}/>
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


const mapStateToProps = state => {
    return {
        groupsName: state.groupsName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeGroup: (idGroup, idStudent) => dispatch(changeGroupHttp(idGroup, idStudent)),
        getsGroupsName: () => dispatch(fetchGroupsNameHttp())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalGroupChange);
