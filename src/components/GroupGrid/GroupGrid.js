import React, { Component } from 'react';
import { Grid, Header, Segment, Divider, Button, Icon } from 'semantic-ui-react';
import PersonSegment from './PersonSegment/PersonSegment';
import { connect } from 'react-redux';
import { fetchGroupsHttp, deleteGroupHttp } from "../../store/actions/actionsGroup";
import AddGroup from "./AddGroup/AddGroup";

class GroupGrid extends Component {

    componentDidMount() {
        console.log('[GroupGrid- componentDidMount]')
        this.props.fetchGroups();
    }

    render() {
        console.log(this.props)
        return (
            <Segment padded >
                <AddGroup />
                <Divider horizontal>Zarządzaj grupami</Divider>
                <Grid columns={3} stackable>{GridColumns(this.props)}</Grid>
            </Segment>
        );
    }


};

const GridColumns = props => {
    return props.listGroup.map(group => {
        return (
            <Grid.Column key={group.id}>
                <Segment.Group horizontal>
                    <Segment textAlign='left' style={{ width: "90%" }}>
                        <Header as="h3">{group.name}</Header>
                    </Segment>
                    <Segment textAlign='right'>
                        <Button icon basic >
                            <Icon name='edit' />
                        </Button>
                    </Segment>
                    <Segment textAlign='right'>
                        <Button icon basic onClick={() => props.deleteGroup(group.id)}>
                            <Icon name='delete' />
                        </Button>
                    </Segment>

                </Segment.Group>
                {RenderStudents(group.students)}
            </Grid.Column>
        );
    });
};

const RenderStudents = students => {
    if (students) {
        return students.map(student => {
            return <PersonSegment key={student.id} student={student} />;
        });
    }

};

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

export default connect(mapStateToProps, mapDispatchToProps)(GroupGrid);
