// comment.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentState } from './comment.reducer';

export const selectCommentState = createFeatureSelector<CommentState>('comments');

export const selectComments = createSelector(
  selectCommentState,
  (state) => state.comments
);

export const selectCommentsLoading = createSelector(
  selectCommentState,
  (state) => state.loading
);

export const selectCommentsError = createSelector(
  selectCommentState,
  (state) => state.error
);
