// posts.selectors.ts

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsState } from './posts.reducer'; // Import the state interface

// Create a feature selector to select the posts state
const selectPostsState = createFeatureSelector<PostsState>('postes');

// Define the selector to get the posts data
export const selectPostsData = createSelector(
  selectPostsState,
  (state) => state.data
);
