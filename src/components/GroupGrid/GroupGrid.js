import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PersonSegment from './PersonSegment/PersonSegment';
import { connect } from 'react-redux';
import * as http from './../../http/http';

const GroupGrid = props => {
  return <Grid columns={3}>{GridColumns(props.listGroup)}</Grid>;
};

const GridColumns = listGroup => {
  http.getGroups();
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
    return <PersonSegment key={student.id} student={student} />;
  });
};

//Redux
const mapStateToProps = state => {
  return {
    listGroup: state.groups.listGroup
  };
};

export default connect(mapStateToProps)(GroupGrid);
