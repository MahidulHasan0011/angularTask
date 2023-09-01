import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { Post } from 'src/app/interfaces/blog';
import { PostsService } from 'src/app/services/posts.service';
import { PostsState } from 'src/app/state/posts.reducer';
import { selectPostsData } from 'src/app/state/posts.selectors';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  post !:Post[]

  postId!: number;

    constructor(private activatedRoute: ActivatedRoute, public postService: PostsService,
      private store: Store<PostsState>,) {}


    ngOnInit() {

      this.activatedRoute.paramMap.subscribe(param => {
        this.postId = Number(param.get('id'))
        this.store.select(selectPostsData).pipe(
          map(data => data.filter(item => item.id === this.postId))
        ).subscribe(filteredData => {
       this.post=filteredData;
        });


      });

      // Now, you have the id value, and you can use it in your component
      // console.log('ID:', id);
    }



}


