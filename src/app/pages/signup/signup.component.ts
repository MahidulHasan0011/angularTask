import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { saveUserInfo } from 'src/app/state/counter.action';
import { userInfoInterface } from 'src/app/state/counter.state';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // standalone: true,
  // imports: [FormsModule, MatSnackBarModule,
  //   ReactiveFormsModule, CommonModule],
})
export class SignupComponent implements OnInit {



   signupForm:FormGroup
  constructor(
              private formBuilder: FormBuilder,
              private router: Router,
              private uiService: UiService,
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
          this.uiService.success("Signup seccesfull");
        console.log('Sign-up successful',this.signupForm.value );
        this.signupForm.reset()
        this.router.navigate(['/', 'sign-in']);
      }
      else{

        console.log('Passwords do not match');

      this.uiService.warn("vhdfjlikvdfbhvldfkvhbdflkvjdbvlkdbvdfljkvbdfvjlkbdfilv");
      }
    }
    else{
      console.log('Form is invalid');

    }
  }


}
