import React, {Component} from 'react';
import {Grid, Segment, Divider} from 'semantic-ui-react';
import AddGroup from "./AddGroup/AddGroup";
import GridColumn from "./GridColumn/GridColumn";

class GroupGrid extends Component {


    render() {
        console.log(this.props)
        return (
            <Segment padded>
                <AddGroup/>
                <Divider horizontal>Zarządzaj grupami</Divider>
                <Grid columns={3} stackable><GridColumn/></Grid>
            </Segment>
        );
    }
}

export default GroupGrid;
