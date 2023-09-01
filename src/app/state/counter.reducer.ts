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
  on(changeIsUserStatus,(state)=>{
    return{
     ...state,
     isUser:true

    }
 })

)




// import { saveUserInfo } from "./counter.action";

// const _counterReducer = createReducer(
//   initialUserInfo,
//   on(saveUserInfo, (state, { username, password }) => {
//     localStorage.setItem('userInfo', JSON.stringify({ username, password }));
//     return { ...state, username, password };
//   })
// );



export function counterReducer(state:any,action:any){
  return _counterReducer(state,action);
}






;


