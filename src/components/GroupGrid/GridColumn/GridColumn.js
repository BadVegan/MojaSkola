import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteGroupHttp, fetchGroupsHttp} from "../../../store/actions/actionsGroup";
import {Button, Header, Icon, Input, Segment, Grid} from "semantic-ui-react";
import PersonSegment from "../PersonSegment/PersonSegment";

class GridColumn extends Component {
    state = {
        idEditing: null
    }

    componentDidMount() {
        console.log('[GroupGrid- componentDidMount]')
        this.props.fetchGroups();
    }

    editGroup = (id) => {
        console.log('do edycji', id)
        this.setState({
            idEditing: id
        });
    }
    RenderStudents = students => {
        if (students) {
            return students.map(student => {
                return <PersonSegment key={student._id} student={student}/>;
            });
        }

    };

    saveName = () => {
        console.log('SAVE NAME')
        this.setState({
            idEditing: null
        })
    };

    cancelName = () => {
        console.log('SCANCEL NAME')
        this.setState({
            idEditing: null
        })
    };

    render() {

        return (
            this.props.listGroup.map(group => {

                let inputEditing = <Input value={group.name}>
                    <input/>
                    <Button positive circular icon='check' onClick={() => this.saveName(group._id)}/>
                    <Button negative circular icon='cancel' onClick={() => this.cancelName(group._id)}/>
                </Input>
                let headers = <Header as="h3">{group.name}</Header>;


                return (<Grid.Column key={group._id}>
                    <Segment.Group horizontal>
                        <Segment textAlign='left' style={{width: "90%"}}>
                            {group._id === this.state.idEditing ? inputEditing : headers}
                        </Segment>

                        {group._id === this.state.idEditing ?  null :
                            <Segment.Group horizontal>
                                <Segment textAlign='right'>
                                    <Button icon basic>
                                        <Icon name='edit' onClick={() => this.editGroup(group._id)}/>
                                    </Button>
                                </Segment>

                                <Segment textAlign='right'>
                                    <Button icon basic>
                                        <Icon name='delete' onClick={() => this.props.deleteGroup(group._id)}/>
                                    </Button>
                                </Segment>
                            </Segment.Group>
                            }

                    </Segment.Group>
                    {/*{RenderStudents(group.students)}*/}
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
        deleteGroup: (id) => dispatch(deleteGroupHttp(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridColumn);