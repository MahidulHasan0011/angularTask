import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';
import { userInfoInterface } from 'src/app/state/user.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  useRAccessdSubscription: Subscription = new Subscription();
  isUser?:boolean
  userName?:string
  // showHeader?:boolean = true;


  constructor(
    private store:Store<{userInfo:userInfoInterface}>,
    private userService: UserService,


  ) { }

  ngOnInit(): void {

    this.useRAccessdSubscription=this.userService.getuserStatus().subscribe(isU=>{
      this.isUser=isU;
      if(this.isUser){
        this.userService.getUserName().subscribe(uName=>{
         this.userName=uName;
        })
      }

    })


    console.log("isUser",this.isUser);

  }



  userLogOut(){
    this.userService.userLogOut(false);


  }



}












