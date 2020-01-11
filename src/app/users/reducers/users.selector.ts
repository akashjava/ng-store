import { AppState } from "../../reducers/app.state";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UsersState } from "./users.state";
function getAppState(state: AppState): UsersState {
  return state.usersState;
}

// ***********************************************
const selectUsersState = createFeatureSelector<
  AppState,
  UsersState
>("usersState");

// export const getfetchBusinessPartnerState = createSelector(getAppState, selectBussinessPartnerState);

export const getUsersSelector = createSelector(
    selectUsersState,
  (state: UsersState) => state.users
);
export const getUsersErrorSelector = createSelector(
    selectUsersState,
  (state: UsersState) => state.error
);
export const getUsersSpinnerSelector = createSelector(
    selectUsersState,
  (state: UsersState) => state.spinner
);

