import * as actionType from './actions';

export const changeGroup = (idGroup, idStudent) => {
  return {
    type: actionType.CHANGE_GROUP,
    idGroup: idGroup,
    idStudent: idStudent
  };
};
