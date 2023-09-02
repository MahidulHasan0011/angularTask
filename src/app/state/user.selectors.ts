import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userInfoInterface } from "./user.state";

const getUserInfo = createFeatureSelector<userInfoInterface>('userInfo');

export const getUserName = createSelector(getUserInfo,(state)=>{
  return state.username
})
export const getPassword = createSelector(getUserInfo,(state)=>{
  return state.password;
})
export const getIsUserStatus = createSelector(getUserInfo,(state)=>{
  return state.isUser;
})
