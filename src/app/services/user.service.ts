import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { userInfoInterface } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { getPassword, getUserName } from '../state/counter.selectors';
import { changeIsUserStatus } from '../state/counter.action';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private store:Store<{userInfo:userInfoInterface}>
    ) { }

    getUserName(){
      return this.store.select(getUserName)
    }

    getPassword(){
      return this.store.select(getPassword)
    }
    changeIsUserStatus(){
      this.store.dispatch(changeIsUserStatus())
    }

}
