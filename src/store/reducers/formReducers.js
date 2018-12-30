import formState from "../state";
import { LOGIN, TOGGLE_REMEMBER, UPDATE_EMAIL, UPDATE_PASSWORD } from "../actions/formActions";

export default function (state = formState, action) {
  switch(action.type) {
    case LOGIN: 
      return {
        ...state,
        canLogin: action.payload
      };

    case TOGGLE_REMEMBER:
      return {
        ...state,
        isRemembered: action.payload
      };

    case UPDATE_EMAIL:
      return {
        ...state,
        saved: {
          ...state.saved,
          email: action.payload
        }
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        saved: {
          ...state.saved,
          password: action.payload
        }
      };

    default:
      return state;
  }
}