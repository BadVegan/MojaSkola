import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import { Route, Switch, NavLink } from 'react-router-dom';


class StudentMenu extends Component {


    state = { activeItem: 'list' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <Menu tabular>
                <NavLink to="/students/">
                    <Menu.Item name='list' active={activeItem === 'list'} onClick={this.handleItemClick} >
                        Lista
                        </Menu.Item >
                </NavLink>
                <NavLink to="/students/add-student">
                    <Menu.Item name='add_student' active={activeItem === 'add_student'} onClick={this.handleItemClick} >
                        Dodaj studenta
                            <Icon name='user plus' color='green' size='large' />
                    </Menu.Item >
                </NavLink>
            </Menu >
        );
    }
}

export default StudentMenu;