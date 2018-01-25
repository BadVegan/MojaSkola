import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom';
import AddStudent from './AddStudent/AddStudent';
import StudentsList from './StudentsList/StudentsList';
import StudentMenu from './StudentMenu/StudentMenu';


class StudentGrid extends Component {



    render() {
        const { match } = this.props
        return (

            <div>
                <StudentMenu />
                <Route path={`${match.url}/`} exact component={StudentsList} />
                <Route path={`${match.url}/add-student`} component={AddStudent} />



            </div>
        )
    }

}


export default StudentGrid;