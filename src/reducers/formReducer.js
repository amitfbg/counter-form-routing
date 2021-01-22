import * as actions from "../actions/actionTypes";

const formReducer = (state, action) => {
  switch (action.type) {
    case actions.Handle_Input_Change:
      return {
        ...state,
        [action.field]: [action.payload],
      };
    case actions.Handle_Toggle_Change:
      return {
        ...state,
        check: !state.check,
      };
    case actions.Handle_Radio_Change:
      return {
        ...state,
        gender: action.payload,
      };
    case actions.Handle_Department_Change:
      return {
        ...state,
        department: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
