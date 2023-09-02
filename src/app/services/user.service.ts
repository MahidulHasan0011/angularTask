import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { userInfoInterface } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { getPassword, getUserName,getIsUserStatus } from '../state/counter.selectors';
import { changeIsUserStatus } from '../state/counter.action';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const API_USER = environment
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private showHeader :boolean=false;

  // private isUser = false;
  private userStatusListener = new Subject<boolean>();

  constructor(
    private store:Store<{userInfo:userInfoInterface}>,
    private router: Router,
    ) { }


    visibolShowHeader(){
      return this.showHeader;
   }

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
    changeIsUserStatus(isUser:boolean |undefined){
      this.store.dispatch(changeIsUserStatus({isUser} ))
    }


    userLogOut(isUser:boolean |undefined) {

      // this.isUser = false;
      this.router.navigate([environment.userBaseUrl]);

      this.userStatusListener.next(false);

      this.store.dispatch(changeIsUserStatus({isUser} ))


    }






}
