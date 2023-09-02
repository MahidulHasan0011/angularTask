import { Dialog } from '@angular/cdk/dialog';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, filter, map } from 'rxjs';
import { Post } from 'src/app/interfaces/blog';

import { Comment } from 'src/app/interfaces/comment';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';


import { selectComments } from 'src/app/state/comment.selectors';
import { PostsState } from 'src/app/state/posts.reducer';
import { selectPostsData } from 'src/app/state/posts.selectors';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit  {
  post !:Post[]
  commentBody: string = '';
  postId!: number;
  useRAccessdSubscription: Subscription = new Subscription();
  comment?:Comment[]
  isUser?:boolean
  userName?:string|undefined

  allComment$: Observable <Comment[]>;
  allPost$: Observable <Post[]>;





    constructor(
      private activatedRoute: ActivatedRoute,
      public postService: PostsService,
      private store: Store<PostsState>,
      private userService: UserService,

       private router: Router,


      private dialogService: DialogService

      ) {
        this.allComment$=this.store.select(selectComments);
        this.allPost$=this.store.select(selectPostsData);
      }






    ngOnInit() {


     this.getPostDetails();

     this.getAllComent();
     this.getUserName();


    }

    getUserName(){
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


    getPostDetails(){
      this.activatedRoute.paramMap.subscribe(param => {
        this.postId = Number(param.get('id'))
        this.allPost$.pipe(
          map(data => data.filter(item => item.id === this.postId))
        ).subscribe(filteredData => {
       this.post=filteredData;
        });
        this.getCommentByPostId(this.postId)

      });
    }


    getCommentByPostId(postId:number){
      this.postService.grtCommentByPostIdFromStore(postId)
    }

    getAllComent(){
      this.allComment$.subscribe(coment=>{

        this.comment=coment;

      }).unsubscribe
    }

    addComent() {

      if(this.isUser){
        this.postService.addComentInStore(this.postId, this.commentBody, this.userName)
        this.commentBody=''

      }
      else{
        this.dialogService.openLoginDialog();
      }





    }
  }










































