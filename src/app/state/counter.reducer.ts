import { createReducer,on } from "@ngrx/store";
import { userInfo } from "./counter.state";
import { saveUserInfo ,changeIsUserStatus} from "./counter.action";



const _counterReducer = createReducer(
  // here i creat reduser
  userInfo,
  // this is initial state
  on(saveUserInfo, (state, { username, password }) => ({
    ...state,
    username,
    password
  })),
  on(changeIsUserStatus,(state,action)=>{
    return{
     ...state,
     isUser:action.isUser

    //  isUser:true

    }
 })

)




export function counterReducer(state:any,action:any){
  return _counterReducer(state,action);
}






;


