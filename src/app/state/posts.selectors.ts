// posts.selectors.ts

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsState } from './posts.reducer';

const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectPostsData = createSelector(selectPostsState, (state) =>state.data);







