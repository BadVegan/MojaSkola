import React from 'react';
import { Segment } from 'semantic-ui-react';
import PersonDropdown from '../PersonDropdown/PersonDropdown';

let PersonSegment = props => {
  return (
    <Segment.Group horizontal>
      <Segment textAlign='left' style={{width: "90%"}}>
        {props.student.name} {props.student.surname}
      </Segment>
      <Segment textAlign='right'>
        <PersonDropdown student={props.student} />
      </Segment>
    </Segment.Group>
  );
};

export default PersonSegment;
