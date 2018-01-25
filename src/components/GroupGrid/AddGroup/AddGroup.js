import React, { Component } from 'react';
import { Button, Input, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addGroupHttp } from "../../../store/actions/actionsGroup";

class AddGroup extends Component {

    state = {
        newGroupName: ''
    };

    nameListener = (event, data) => {
        this.setState({
            newGroupName: data.value
        })
    };

    addNewGroup = () => {
        this.props.addNewGroup(this.state.newGroupName);
        this.setState({
            newGroupName: ''
        });
    };

    validateName = () => {
        return this.state.newGroupName === null || this.state.newGroupName.trim() === '';
    };

    render() {

        let disableButton = this.validateName();
        let valueText = this.state.newGroupName;
        return (
            <Segment basic>
                <Input
                    icon='group'
                    iconPosition='left'
                    placeholder='Nowa grupa'
                    onChange={this.nameListener.bind(this)}
                    value={valueText}
                />
                <Button positive disabled={disableButton} onClick={this.addNewGroup.bind(this)}>Dodaj</Button>
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