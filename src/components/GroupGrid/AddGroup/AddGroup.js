import React, {Component} from 'react';
import {Button, Input, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addGroupHttp} from "../../../store/actions/actionsGroup";

class AddGroup extends Component {

    state = {
        newGroup: null
    };

    addGroup = (event, data) => {
        this.setState({
            newGroup: data.value
        })
    };

    validateName = () => {
        return this.state.newGroup === null || this.state.newGroup.trim() === ''
    };

    render() {

        let disableButton = this.validateName();
        return (
            <Segment basic>
                <Input
                    icon='group'
                    iconPosition='left'
                    placeholder='Nazwa grupy'
                    onChange={this.addGroup.bind(this)}
                />
                <Button positive disabled={disableButton} onClick={() => this.props.addNewGroup(this.state.newGroup)}>Dodaj</Button>
            </Segment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewGroup: (name) => dispatch(addGroupHttp(name))
    }
};
export default connect(null, mapDispatchToProps)(AddGroup);