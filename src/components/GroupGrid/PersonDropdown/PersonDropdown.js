import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownExampleDropdown = () => (
  <Dropdown icon="tasks">
    <Dropdown.Menu>
      <Dropdown.Item icon="search" text="Szczgóły" />
      <Dropdown.Item icon="group" text="Zmien grupę" />
      <Dropdown.Divider />
      <Dropdown.Item icon="trash" text="Usuń" />
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownExampleDropdown;
