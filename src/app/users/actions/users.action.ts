import { Action } from "@ngrx/store";

export enum UsersActionTypes {
  FETCH_USERS_ACTION = "[USERS] fetchUsersAction",
  FETCH_USERS_SUCCESS_ACTION = "[USERS] fetchUsersSuccessAction",
  FETCH_USERS_FAILED_ACTION = "[USERS] fetchUsersFailedAction"
}

export class FetchUsersAction implements Action {
  readonly type = UsersActionTypes.FETCH_USERS_ACTION;
  constructor(public payload: any) {}
}
export class FetchUsersSuccessAction implements Action {
  readonly type = UsersActionTypes.FETCH_USERS_SUCCESS_ACTION;
  constructor(public payload: any) {}
}
export class FetchUsersFailedAction implements Action {
  readonly type = UsersActionTypes.FETCH_USERS_FAILED_ACTION;
  constructor(public payload: any) {}
}
 export type UsersActions = 
 | FetchUsersAction
 | FetchUsersSuccessAction
 | FetchUsersFailedAction;
