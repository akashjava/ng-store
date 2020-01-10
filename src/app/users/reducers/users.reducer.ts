import { UsersActionTypes, UsersActions } from "../actions/users.action";
import { UsersState, initialUsersState } from "./users.state";

export function reducer(state = initialUsersState, action: UsersActions): UsersState {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_ACTION: {
      return {
        ...state,
        spinner: true,
      };
    }

    case UsersActionTypes.FETCH_USERS_SUCCESS_ACTION: {
      return {
        ...state,
        spinner: false,
        users:action.payload
      };
    }


    case UsersActionTypes.FETCH_USERS_FAILED_ACTION: {
      return {
        ...state,
        spinner:false,
        error:'Network error'
      };
    }

    default:
      return state;
  }
}
