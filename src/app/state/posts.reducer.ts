import { createReducer, on } from '@ngrx/store';
import { loadPostsSuccess, loadPostsFailure } from './posts.actions';
import { Post } from '../interfaces/blog';

export interface PostsState {
  data: Post[];
  loading: boolean;
  error: any;
}

const posts: PostsState = {
  data: [],
  loading: false,
  error: null,
};
console.log("posts",posts);


export const postsReducer = createReducer(
  posts,
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    data: posts,
    posts,
    loading: false
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);










// posts.reducer.ts

// import { createReducer, on } from '@ngrx/store';
// import * as PostsActions from './posts.actions'; // Corrected import
// import { Post } from '../interfaces/blog';

// export interface PostsState {
//   data: Post[];
//   loading: boolean;
//   error: any;
// }

// const initialState: PostsState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// export const postsReducer = createReducer(
//   initialState,
//   on(PostsActions.loadPostsSuccess, (state, { posts }) => ({
//     ...state,
//     data: posts,
//     loading: false,
//   })),
//   on(PostsActions.loadPostsFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   }))
// );


















