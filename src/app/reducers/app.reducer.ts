import { environment } from "../../environments/environment";

import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import { AppState as State } from "./app.state";
import * as fromUsers from "../users/reducers/users.reducer";

export const reducers: ActionReducerMap<State> = {
     usersState:fromUsers.reducer
  };
  
  /**
   * logger reducer
   * @param reducer ofType ActionReducer<>
   */
  export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
    return function(state: State, action: any): State {
      const newState = reducer(state, action);
      console.log("action", action);
      console.log("oldState", state);
      console.log("newState", newState);
      return newState;
    };
  }
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
  