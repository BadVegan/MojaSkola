import React from 'react';
import {Grid, Button, Icon} from 'semantic-ui-react';

const DeleteGroup = (props) =>{
    return (
        <Grid.Column>
            <Button icon basic onClick={() => props.editGroup(props.groupId)}>
                <Icon name='edit'/>
            </Button>
            <Button icon basic onClick={() => props.deleteGroup(props.groupId)} disabled={props.disabledDelete}>
                <Icon name='delete'/>
            </Button>
        </Grid.Column>
    )
};
export default DeleteGroup;