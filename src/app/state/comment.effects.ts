
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as CommentActions from './comment.action';
import { PostsService } from '../services/posts.service'; // Import your service
import { Comment } from '../interfaces/comment';

@Injectable()
export class CommentEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.loadComments),
      mergeMap((action) =>
        this.postsService.getCommentByPostID(action.postId).pipe(
          map((response: any[]) => {
   
            // Assuming the API response is an array of objects
            const comments: Comment[] = response.map((item: any) => {
              return {
                postId: item.postId,
                id: item.id,
                name:item.name,
                email: item.email,
                body: item.body,
                // Map other properties as needed...
              };
            });


            return CommentActions.loadCommentsSuccess({ comments });
          }),
          catchError((error) => of(CommentActions.loadCommentsFailure({ error })))
        )
      )
    )
  );
}
