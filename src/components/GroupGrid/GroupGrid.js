import React, {Component} from 'react';
import {Grid, Header, Segment, Divider} from 'semantic-ui-react';
import PersonSegment from './PersonSegment/PersonSegment';
import {connect} from 'react-redux';
import {fetchGroupsHttp} from "../../store/actions/actionsGroup";
import AddGroup from "./AddGroup/AddGroup";

class GroupGrid extends Component {

    componentDidMount() {
        console.log('[GroupGrid- componentDidMount]')
        this.props.fetchGroups();
    }

    render() {
        return (
            <Segment padded >
                <AddGroup/>
                <Divider horizontal>Zarządzaj grupami</Divider>
                <Grid columns={3} stackable>{GridColumns(this.props.listGroup)}</Grid>
            </Segment>
        );
    }


};

const GridColumns = listGroup => {

    return listGroup.map(group => {
        return (
            <Grid.Column key={group.id}>
                <Header as="h2">{group.name}</Header>
                {RenderStudents(group.students)}
            </Grid.Column>
        );
    });
};

const RenderStudents = students => {
    return students.map(student => {
        return <PersonSegment key={student.id} student={student}/>;
    });
};

//Redux
const mapStateToProps = state => {
    return {
        listGroup: state.groups
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: () => dispatch(fetchGroupsHttp())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupGrid);
