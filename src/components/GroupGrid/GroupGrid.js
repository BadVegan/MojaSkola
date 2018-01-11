import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PersonSegment from './PersonSegment/PersonSegment';

const GroupGrid = () => {
  let state = {
    studenst: [
      {
        id: 1,
        name: 'GrupaA',
        members: [{ id: 1, name: 'Dawid', surname: 'Ryczko' }]
      },
      {
        id: 2,
        name: 'GrupaB',
        members: [{ id: 1, name: 'Jan', surname: 'Kowalski' }]
      }
    ]
  };

  return <Grid columns={3}>{GridColumns(state)}</Grid>;
};

const GridColumns = state => {
  return state.studenst.map(student => {
    return (
      <Grid.Column key={student.id}>
        <Header as="h2">{student.name}</Header>
        {RenderStudents(student)}
      </Grid.Column>
    );
  });
};

const RenderStudents = students => {
  return students.members.map(student => {
    return <PersonSegment key={student.id} student={student} />;
  });
};

export default GroupGrid;
