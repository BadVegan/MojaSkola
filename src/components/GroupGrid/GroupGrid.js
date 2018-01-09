import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PersonSegment from './PersonSegment/PersonSegment';

let GroupGrid = () => {
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

  return (
    <Grid columns={3}>
      {state.studenst.map(s => {
        return (
          <Grid.Column key={s.id}>
            <Header as="h2">{s.name}</Header>

            {s.members.map(m => {
              return <PersonSegment key={m.id} name={m.name} surname={m.surname} />;
            })}
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default GroupGrid;
