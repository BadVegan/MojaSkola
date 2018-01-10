import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import PersonDropdown from '../PersonDropdown/PersonDropdown';

let PersonSegment = props => {
  return (
    <Segment style={{ display: 'flex' }}>
      <Container textAlign="left">
        {props.name} {props.surname}
      </Container>
      <Container textAlign="right">
        <PersonDropdown />
      </Container>
    </Segment>
  );
};

export default PersonSegment;
