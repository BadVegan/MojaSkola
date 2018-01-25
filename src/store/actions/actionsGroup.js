import * as actionType from './actions';
import * as http from './../../http/http';


const fetchGroups = (data) => {
    return {
        type: actionType.FETCH_GROUPS,
        groups: data
    }
};


export const fetchGroupsHttp = () => {
    return dispatch => {
        http.getGroups()
            .then(res => {
                dispatch(fetchGroups(res.data.result));
            }).catch(err => console.log(err));
    }
};

const fetchGroupsName = (data) => {
    return {
        type: actionType.FETCH_GROUPS_NAME,
        groupsName: data
    }
};

export const fetchGroupsNameHttp = () => {
    return dispatch => {
        http.fetchGroupsName().then(res => {
            dispatch(fetchGroupsName(res));
        });
    };
};

const changeGroup = (data) => {
    return {
        type: actionType.CHANGE_GROUP,
        groups: data
    }
};

export const changeGroupHttp = (idGroup, idStudent) => {
    return dispatch => {
        http.changeGroup(idGroup, idStudent).then(groups => {
            dispatch(changeGroup(groups));
        })
    };
};

// add group
const addGroup = (newGroup) => {
    return {
        type: actionType.ADD_GROUP,
        group: newGroup
    };
};

export const addGroupHttp = (name) => {
    return dispatch => {
        http.addGroup(name).then(response => {
            dispatch(addGroup(response.data.result));
        }).catch(error => console.log(error));
    };
};
// 

// delete group
const deleteGroup = (deletedGroup) => {
    return {
        type: actionType.DELETE_GROUP,
        group: deletedGroup
    };
};

export const deleteGroupHttp = (id) => {
    console.log('DELETE', id);
    return dispatch => {
        http.deleteGroup(id).then(response => {
            dispatch(deleteGroup(response.data.result));
        });
    };
};
//edit group name

const editGroupName = (changedGroup) => {
    return {
        type: actionType.CHANGE_NAME,
        group: changedGroup
    };
};

export const editGroupNameHttp = (id, name) => {
    console.log('EDIT_HTTP', id, name);
    return dispatch => {
        http.editGroup(id, name).then(response => {
            dispatch(editGroupName(response.data.result))
        });
    }
};