import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { saveUserInfo } from 'src/app/state/counter.action';
import { userInfoInterface } from 'src/app/state/counter.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



   signupForm:FormGroup
  constructor(
              private formBuilder: FormBuilder,
              private router: Router,
              private store:Store<{userInfo:userInfoInterface}>

               ) {
    this.signupForm=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword :['',[Validators.required]]
    });
  }

  ngOnInit(): void {


  }
  submitForm(){
    if(this.signupForm.valid){
      if(this.signupForm.value.password === this.signupForm.value.confirmPassword){

        this.store.dispatch(saveUserInfo({username:this.signupForm.value.username,
          password:this.signupForm.value.password}))
        console.log('Sign-up successful',this.signupForm.value );
        this.signupForm.reset()
        this.router.navigate(['/', 'sign-in']);
      }
      else{

        console.log('Passwords do not match');
      }
    }
    else{
      console.log('Form is invalid');
    }
  }

}
