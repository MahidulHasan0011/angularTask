
import { createAction, props } from '@ngrx/store';
import { Post } from '../interfaces/blog';

export const loadPosts = createAction('[posts] Load Posts');
export const loadPostsSuccess = createAction('[posts] Load Posts Success',
 props<{ posts: Post[] }>());
export const loadPostsFailure = createAction('[posts] Load Posts Failure',
props<{ error: any }>());






