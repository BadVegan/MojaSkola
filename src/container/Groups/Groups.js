import React, { Component } from 'react';
import GroupGrid from './../../components/GroupGrid/GroupGrid';
import { Container } from 'semantic-ui-react';

export default class Groups extends Component {
  render() {
    return (
      <Container style={{ padding: '80px 0' }}>
        <GroupGrid />
      </Container>
    );
  }
}
