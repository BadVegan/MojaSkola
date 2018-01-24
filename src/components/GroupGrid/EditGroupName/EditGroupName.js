import React from 'react';
import {Grid, Input, Button} from 'semantic-ui-react'

const EditGroupName = (props) => {
    return (
        <Grid columns='equal' verticalAlign={'middle'}>
            <Grid.Column stretched width={10}>
                <Input defaultValue={props.group.name}
                       onChange={(event, data) => props.onChangeName(event, data)}/>
            </Grid.Column>
            <Grid.Column>
                <Button positive circular icon='check' onClick={() => props.saveName(props.group._id)}/>
                <Button negative circular icon='cancel' onClick={() => props.cancelName(props.group._id)}/>
            </Grid.Column>

        </Grid>
    )
};

export default EditGroupName;