import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const STUDENTS = 'students';
const GROUPS = 'groups';
const TEACHERS = 'teachers';
const PAYMENTS = 'payments';

export class NavBar extends Component {
  state = {
    activeItem: STUDENTS
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <nav>
        <Menu stackable >
          <NavLink to="/students">
            <Menu.Item name={STUDENTS} active={activeItem === STUDENTS} onClick={this.handleItemClick}>
              Uczniowie
            </Menu.Item>
          </NavLink>

          <NavLink to="/groups">
            <Menu.Item name={GROUPS} active={activeItem === GROUPS} onClick={this.handleItemClick}>
              Grupy
            </Menu.Item>
          </NavLink>

          <NavLink to="/teachers">
            <Menu.Item name={TEACHERS} active={activeItem === TEACHERS} onClick={this.handleItemClick}>
              Nauczyciele
            </Menu.Item>
          </NavLink>

          <NavLink to="/payments">
            <Menu.Item name={PAYMENTS} active={activeItem === PAYMENTS} onClick={this.handleItemClick}>
              Płatnoci
            </Menu.Item>
          </NavLink>

          <Menu.Menu position="right">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <input className="prompt" type="text" placeholder="Szukaj" />
                <i className="search NavLink icon" />
              </div>
              <div className="results" />
            </div>

            <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </nav>
    );
  }
}
