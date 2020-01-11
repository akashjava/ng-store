import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of} from "rxjs";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError} from "rxjs/operators";
import {UsersActionTypes,FetchUsersSuccessAction,FetchUsersFailedAction} from "../actions/users.action";
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private service: UsersService) {}


  @Effect()
  fetchCustomFields$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionTypes.FETCH_USERS_ACTION),
    switchMap(() => this.service.getUsers()),
    map((res: any) => (res.status === 200 ? new FetchUsersSuccessAction(res.data) : new FetchUsersFailedAction(String(res.error)))),
    catchError(err => of(new FetchUsersFailedAction("Unexpected error")))
  );
}
