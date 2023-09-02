// comment.reducer.ts
import { createReducer, on } from '@ngrx/store';
// import { Comment } from 'path-to-comment-model';
import { Comment } from '../interfaces/comment';
import * as CommentActions from './comment.action';

export interface CommentState {
  comments: Comment[];
  loading: boolean;
  error: any;
}

export const initialState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentReducer = createReducer(
  initialState,
  on(CommentActions.loadComments, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CommentActions.loadCommentsSuccess, (state, { comments }) => ({


    ...state,
    comments:comments,
    loading: false,
  })),
  on(CommentActions.loadCommentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(CommentActions.addComment, (state, { postId, body, name }) => ({
    ...state,
    comments: [
      // ...state.comments,
      {
        postId,
        id: state.comments.length + 1, // Generate a unique ID for the new comment
        name,
        email: '', // You can set email to an empty string or handle it as needed
        body,
      },
      ...state.comments,
    ],
    loading: false,
  }))







);















