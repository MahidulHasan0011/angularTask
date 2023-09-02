// comment.actions.ts
import { createAction, props } from '@ngrx/store';
// import { Comment } from 'path-to-comment-model';
import { Comment } from '../interfaces/comment';

export const loadComments = createAction(
  '[Comments] Load Comments',
  props<{ postId: number }>()
);

export const loadCommentsSuccess = createAction(
  '[Comments] Load Comments Success',


  props<{ comments: Comment[] }>()

);

export const loadCommentsFailure = createAction(
  '[Comments] Load Comments Failure',
  props<{ error: any }>()
);


export const saveCommentText = createAction(
  '[Comment] Save Comment Text',
  props<{ text: string }>()
);

export const addComment = createAction(
  '[Comment] Add Comment',
  props<{ postId: number; body: string; name: string | undefined }>()
);


