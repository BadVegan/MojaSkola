import * as actionType from '../actions/actions';

const initialState = {
    groups: [],
    groupsName: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === actionType.CHANGE_GROUP) {
        console.log(action.groups)
        return {
            ...state,
            groups: [...action.groups]
        }
    } else if (action.type === actionType.FETCH_GROUPS) {
        return {
            ...state,
            groups: [...action.groups]
        }
    } else if (action.type === actionType.FETCH_GROUPS_NAME) {
        return {
            ...state,
            groupsName: [...action.groupsName]
        }
    } else if (action.type === actionType.ADD_GROUP){
        return {
            ...state,
            groupsName: [...action.groupsName]
        }
    }
    return state;
};

export default reducer;
