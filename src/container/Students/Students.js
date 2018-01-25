import React, { Component } from 'react';
import StudentGrid from './../../components/StudentGrid/StudentGrid';
import { Container } from 'semantic-ui-react';

export default class Students extends Component {
  render() {
    return (
      <Container style={{ padding: '80px 0' }}>
        <StudentGrid {...this.props} />
      </Container>
    )
  }
}
