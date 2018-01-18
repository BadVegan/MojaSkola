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
        http.getGroups().then(res => {
            dispatch(fetchGroups(res.data));
        })
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
            dispatch(fetchGroupsName(res))
        })
    }
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

const addGroup = (groups) => {
    return {
        type: actionType.ADD_GROUP,
        groupsName: groups
    }
};

export const addGroupHttp = (name) => {
    return dispatch => {
        http.addGroup(name).then(groups => {
            dispatch(addGroup(groups));
        })
    }

};
