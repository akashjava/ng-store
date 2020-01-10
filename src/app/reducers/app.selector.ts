import { AppState } from "./app.state";
import { createSelector } from "@ngrx/store";

function fetchAppState(state: AppState): AppState {
  return state;
}
// *************************** PUBLIC API's ****************************
export const getAppState = createSelector(fetchAppState, fetchAppState);
