import * as actionType from './actions/actions';

const initialState = {
  groups: {
    listGroup: []
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.CHANGE_GROUP) {
    let stdList1 = [...state.groups.listGroup[0].students];
    const stdList2 = [...state.groups.listGroup[1].students];
    const stud = stdList1[0];

    stdList2.push({ ...stud });
    stdList1 = [];

    const newArr = [...state.groups.listGroup];
    newArr[0].students = stdList1;
    newArr[1].students = stdList2;

    return {
      ...state,
      groups: {
        ...state.groups,
        listGroup: newArr
      }
    };
  }
  return state;
};

export default reducer;
