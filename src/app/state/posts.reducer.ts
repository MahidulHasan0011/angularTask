import { createReducer, on } from '@ngrx/store';
import { loadPostsSuccess, loadPostsFailure } from './posts.actions';
import { Post } from '../interfaces/blog';

export interface PostsState {
  data: Post[];
  loading: boolean;
  error: any;
}

const postes: PostsState = {
  data: [],
  loading: false,
  error: null,
};

export const postsReducer = createReducer(
  postes,
  on(loadPostsSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    error: null,
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);




