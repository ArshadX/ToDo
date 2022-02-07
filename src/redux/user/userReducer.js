import {ADD_TASK, REMOVE_TASK} from './userTypes';

const initialState = {
  list: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: action?.payload,
      };
    case REMOVE_TASK:
      return {
        ...state,
        list: action?.payload,
      };
    default:
      return state;
  }
};
export default reducer;
