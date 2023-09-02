import { Component, OnInit, inject } from '@angular/core';
import{Store}from"@ngrx/store";
import {Observable, Subscription} from "rxjs";
import { Post } from 'src/app/interfaces/blog';
import { PostsService } from 'src/app/services/posts.service';
import { UiService } from 'src/app/services/ui.service';
import { getIsUserStatus } from 'src/app/state/user.selectors';
import { userInfoInterface } from 'src/app/state/user.state';
import { loadPosts } from 'src/app/state/posts.actions';
import { selectPostsData } from 'src/app/state/posts.selectors';
// import { loadPosts } from './state/posts.actions';
import * as fromPostsActions from '../../state/posts.actions';
import { PostsState } from 'src/app/state/posts.reducer';
import { PageEvent } from '@angular/material/paginator';
import { firstValueFrom } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostComponent implements OnInit {
  useRAccessdSubscription: Subscription = new Subscription();
  postSubscription: Subscription = new Subscription();
   isUser?:boolean;
   posts$: Observable<Post[]>;
   allPosts?: Post[];
   postsWithPagination?: Post[];
    pageEvent!: PageEvent;
    length = 0;
    pageSize = 10;
    pageIndex = 0;
    pageSizeOptions = [5, 10, 25];
     maxTextLength = 100;
  constructor(

      private store: Store<PostsState>,
      private postService:PostsService
  ) {
    this.posts$ = this.store.select(selectPostsData);
  }

  ngOnInit() {
    this.store.dispatch(loadPosts());

    this.useRAccessdSubscription = this.store.select(getIsUserStatus).subscribe(isU=>{
      this.isUser=isU;
    });
    this.getallPosts();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getPostWithPagination();
  }

  getallPosts(){
    this.posts$.subscribe(res => {
      console.log(' post res', res)
      this.allPosts = res;
      this.length = this.allPosts?this.allPosts.length : 0;
      this.getPostWithPagination();
    }).unsubscribe
  }

  getPostWithPagination(){
    this.postsWithPagination = this.allPosts?.slice(this.pageIndex*this.pageSize, this.pageIndex*this.pageSize+this.pageSize);
    console.log("slicedData:", this.postsWithPagination);

  }






}






