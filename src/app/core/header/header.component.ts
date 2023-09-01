import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { userInfoInterface } from 'src/app/state/counter.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  useRAccessdSubscription: Subscription = new Subscription();
  isUser?:boolean
  constructor(
    private store:Store<{userInfo:userInfoInterface}>,
    public userService: UserService,
  ) { }

  ngOnInit(): void {

    this.useRAccessdSubscription=this.userService.getuserStatus().subscribe(isU=>{
      this.isUser=isU;

    })
    console.log("isUser",this.isUser);
  }

}
