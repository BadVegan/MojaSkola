import * as actionType from '../actions/actions';

const initialState = {
    groups: [],
    groupsName: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === actionType.CHANGE_GROUP) {
        return {
            ...state,
            groups: [...action.groups]
        }
    } else if (action.type === actionType.FETCH_GROUPS) {
        console.log('FETCH_GROUPS', action.groups)
        return {
            ...state,
            groups: [...action.groups]
        }
    } else if (action.type === actionType.FETCH_GROUPS_NAME) {
        return {
            ...state,
            groupsName: [...action.groupsName]
        }
    } else if (action.type === actionType.ADD_GROUP) {
        let newArr = [...state.groups]
        newArr.push(action.group)
        return {
            ...state,
            groups: newArr
        }
    } else if (action.type === actionType.DELETE_GROUP) {
        let newArr = state.groups.filter(e => e._id !== action.group._id);
        return {
            ...state,
            groups: newArr
        }
    } else if (action.type === actionType.CHANGE_NAME) {
        let newArr = [...state.groups];
        newArr.find(e => {
            if (e._id === action.group._id) {
                e.name = action.group.name;
            }
        });
        return {
            ...state,
            groups: newArr
        }
    }

    return state;
};

export default reducer;
