import { createAction, props } from "@ngrx/store";

export const saveUserInfo = createAction ('saveUserInfo',


props<{username?:string,password?:string}>());




