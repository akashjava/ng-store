import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsersSelector, getUsersSpinnerSelector } from '../../reducers/users.selector';
import { FetchUsersAction,FetchUsersSuccessAction } from "../../actions/users.action";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$:Observable<any>;
  spinner$:Observable<boolean>;
  users:any[]=[
    {
    name:'Akash',
    mobNo:'9999999999',
    email:'akash@email.com'
  },
    {
    name:'Ram',
    mobNo:'8888888888',
    email:'ram@email.com'
  },
    {
    name:'Lipika',
    mobNo:'7777777777',
    email:'lipika@email.com'
  }
]

  constructor(private _store:Store<any>) { }

  ngOnInit() {
    this._store.dispatch(new FetchUsersAction({}))
    setTimeout(() => {
      this._store.dispatch(new FetchUsersSuccessAction(this.users))
    }, 3000);
    this.users$=this._store.select(getUsersSelector)
    this.spinner$=this._store.select(getUsersSpinnerSelector)
  }

}
