
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromPostsActions from './posts.actions';
import { PostsService } from '../services/posts.service';
import { Post } from '../interfaces/blog';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPostsActions.loadPosts),
      switchMap(() =>
        this.postsService.getAllPosts().pipe(
          map((posts: Post[]) => fromPostsActions.loadPostsSuccess({posts})),
          catchError((error) => of(fromPostsActions.loadPostsFailure({ error })))
        )
      )
    )
  );
}


















;
