import React, { Component } from 'react';
import './App.css';
import { Layout } from './Layout/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Students from './container/Students/Students';
import Groups from './container/Groups/Groups';
import Teachers from './container/Teachers/Teachers';
import Payments from './container/Payments/Payments';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Switch>
          <Route path={'/students'} exact component={Students} />
          <Route path={'/groups'} component={Groups} />
          <Route path={'/teachers'} component={Teachers} />
          <Route path={'/payments'} component={Payments} />
        </Switch>
      </div>
    );
  }
}

export default App;
