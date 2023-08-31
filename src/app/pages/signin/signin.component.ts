import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import{Store}from"@ngrx/store";
import {Subscription} from "rxjs";
import { getPassword, getUserName } from 'src/app/state/counter.selectors';
import { userInfoInterface } from 'src/app/state/counter.state';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit , OnDestroy {
  signInForm:FormGroup;
  userIdSubscription: Subscription = new Subscription();
  passwordSubscription: Subscription = new Subscription();
  userId?:string;
  password?:string;



  constructor(private formBuilder: FormBuilder,
              private store:Store<{userInfo:userInfoInterface}>
              ) {
    this.signInForm=this.formBuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]],

    });
  }

  ngOnInit(): void {
    this.userIdSubscription=this.store.select(getUserName).subscribe(uId=>{
      this.userId=uId;

    })
    this.passwordSubscription=this.store.select(getPassword).subscribe(pass=>{
      this.password=pass;

    })

    console.log("from ligin page",this.userId ,this.password);
  }


  onSubmitForm(){
    if(this.signInForm.valid){
      if(this.signInForm.value.username === this.userId && this.signInForm.value.password === this.password ){
        console.log('Success');
        // this.store.dispatch(saveUserInfo({username:this.signupForm.value.username,
        //   password:this.signupForm.value.password}))
        // console.log('Sign-up successful',this.signupForm.value );
        // this.signupForm.reset()
      }
      else{

        console.log('Passwords do not match');
      }
    }
    else{
      console.log('Form is invalid');
    }
  }



  ngOnDestroy(){
    if(this.userIdSubscription || this.passwordSubscription ){
     this.userIdSubscription.unsubscribe();
     this.passwordSubscription.unsubscribe();
    }
   }
}
