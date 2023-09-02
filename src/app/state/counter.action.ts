import { createAction, props } from "@ngrx/store";

export const saveUserInfo = createAction ('saveUserInfo',


props<{username?:string,password?:string}>());

// export const changeIsUserStatus = createAction('changeIsUserStatus');

export const changeIsUserStatus = createAction ('changeIsUserStatus',
props<{isUser?:boolean}>());


