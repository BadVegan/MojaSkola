import React, { Component } from 'react';
import { Button, Input, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addGroupHttp } from "../../../store/actions/actionsGroup";

class AddGroup extends Component {

    state = {
        newGroup: ''
    };

    nameListlener = (event, data) => {
        this.setState({
            newGroup: data.value
        })
    };

    addNewGroup = () => {
        this.props.addNewGroup(this.state.newGroup);
        this.setState({
            newGroup: ''
        });
    }

    validateName = () => {
        return this.state.newGroup === null || this.state.newGroup.trim() === '';
    };

    render() {

        let disableButton = this.validateName();
        let valueText = this.state.newGroup;
        return (
            <Segment basic>
                <Input
                    icon='group'
                    iconPosition='left'
                    placeholder='Nowa grupa'
                    onChange={this.nameListlener.bind(this)}
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