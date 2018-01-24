import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteGroupHttp, fetchGroupsHttp, editGroupNameHttp} from "../../../store/actions/actionsGroup";
import { Header, Grid} from "semantic-ui-react";
import PersonSegment from "../PersonSegment/PersonSegment";
import EditGroupName from "../EditGroupName/EditGroupName";
import DeleteGroup from "../DeleteGroup/DeleteGroup";

class GridColumn extends Component {
    state = {
        idEditing: null,
        newName: ''
    };

    componentDidMount() {
        this.props.fetchGroups();
    }

    editGroup = (id) => {
        this.setState({
            idEditing: id
        });
    };

    onChangeName = (event, data) => {
        this.setState({
            newName: data.value
        })
    };

    saveName = () => {
        if (this.state.newName !== '') {
            this.setState({
                idEditing: null,
                newName: ''
            });
            this.props.editName(this.state.idEditing, this.state.newName);
        } else {
            this.setState({
                idEditing: null
            });
        }

    };

    cancelName = () => {
        this.setState({
            idEditing: null
        })
    };

    render() {

        return (
            this.props.listGroup.map(group => {
                const disableDelete = group.students ? true : false;
                const inputEditing = <EditGroupName group={group}
                                                    onChangeName={this.onChangeName}
                                                    saveName={this.saveName}
                                                    cancelName={this.cancelName}/>;
                const headers = <Grid.Column width={10}><Header color='green'
                                                                as="h3">{group.name}</Header></Grid.Column>;

                return (<Grid.Column key={group._id}>
                    <Grid columns='equal' verticalAlign={'middle'} textAlign={'center'}>
                        {group._id === this.state.idEditing ? inputEditing : headers}

                        {group._id === this.state.idEditing ? null :
                            <DeleteGroup groupId={group._id} disabledDelete={disableDelete} editGroup={this.editGroup}
                                         deleteGroup={this.props.deleteGroup}/>}
                    </Grid>

                    {group.students ? group.students.map(student => <PersonSegment key={student.id}
                                                                                   student={student}/>) : null}
                </Grid.Column>)
            })
        )
    }
}

//Redux
const mapStateToProps = state => {
    return {
        listGroup: state.groups
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: () => dispatch(fetchGroupsHttp()),
        deleteGroup: (id) => dispatch(deleteGroupHttp(id)),
        editName: (id, name) => dispatch(editGroupNameHttp(id, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridColumn);