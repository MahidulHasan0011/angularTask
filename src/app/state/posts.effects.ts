import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
// import { PostsService } from './posts.service';
import * as fromPostsActions from './posts.actions';
import { PostsService } from '../services/posts.service';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPostsActions.loadPosts),
      switchMap(() =>
        this.postsService.getAllPosts().pipe(
          map((response) => fromPostsActions.loadPostsSuccess({ data: response.data })),
          catchError((error) => of(fromPostsActions.loadPostsFailure({ error })))
        )
      )
    )
  );
}












