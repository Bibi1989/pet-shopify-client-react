//
import { REGISTER_USER, LOGIN_USER, USER_PROFILE, REGISTER_ERROR, LOGIN_ERROR } from "./user-types";

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        animals: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        animals: action.payload
      };
    case USER_PROFILE:
      return {
        ...state,
        animals: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login_error: action.payload
      };
    case REGISTER_ERROR:
      return {
        ...state,
        register_error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
