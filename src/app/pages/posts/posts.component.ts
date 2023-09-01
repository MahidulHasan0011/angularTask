import { Component, OnInit, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import{Store, select}from"@ngrx/store";
import {Observable, Subscription} from "rxjs";
import { Post } from 'src/app/interfaces/blog';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';
import { getIsUserStatus } from 'src/app/state/counter.selectors';
import { userInfoInterface } from 'src/app/state/counter.state';
import { selectPostsData } from 'src/app/state/posts.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  pageEvent: PageEvent | undefined;

  posts$!: Observable<Post[]>;
  useRAccessdSubscription: Subscription = new Subscription();
   isUser?:boolean
  constructor(

      public uiService: UiService,
      public userService: UserService,
      // private store:Store<{userInfo:userInfoInterface}>,
      private store: Store
    ) { }

  ngOnInit(): void {

    this.useRAccessdSubscription=this.userService.getuserStatus().subscribe(isU=>{
      this.isUser=isU;

    })

    this.getPosts();
  }

  getPosts(page?:number, limite?:number){

    console.log("isUser",this.isUser);
    console.log("posts",this.posts$ );
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.getPosts(this.pageIndex, this.pageSize);
  }


}













