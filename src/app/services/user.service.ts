import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { userInfoInterface } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { getPassword, getUserName,getIsUserStatus } from '../state/counter.selectors';
import { changeIsUserStatus } from '../state/counter.action';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // private isUser = false;
  private userStatusListener = new Subject<boolean>();

  constructor(
    private store:Store<{userInfo:userInfoInterface}>
    ) { }

    getUserName(){
      return this.store.select(getUserName)
    }

    getPassword(){
      return this.store.select(getPassword)
    }
    getuserStatus(){
      return this.store.select(getIsUserStatus)
    }
     getUserStatusListener() {
    return this.userStatusListener.asObservable();
  }
    changeIsUserStatus(){
      this.store.dispatch(changeIsUserStatus())
    }

}
