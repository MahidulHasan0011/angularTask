import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';
import { changeIsUserStatus } from 'src/app/state/user.action';
import { getPassword, getUserName } from 'src/app/state/user.selectors';
import { userInfoInterface } from 'src/app/state/user.state';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;
  userId?: string;
  password?: string;

  userIdSubscription: Subscription = new Subscription();
  passwordSubscription: Subscription = new Subscription();


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private uiService: UiService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.signInForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],

    });
  }

  ngOnInit(): void {



    this.userIdSubscription = this.userService.getUserName().subscribe(res => {
      console.log('res', res)
      this.userId = res;
    })



    this.passwordSubscription = this.userService.getPassword().subscribe(res => {
      console.log("res", res);
      this.password = res;

    })


    console.log("from ligin page", this.userId, this.password);
  }


  onSubmitForm() {
    if (this.signInForm.valid) {
      if (this.signInForm.value.username === this.userId && this.signInForm.value.password === this.password) {
        console.log('Success');

        this.userService.changeIsUserStatus(true);
        this.uiService.success("Signin seccesfull");

        const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
        if (returnUrl && returnUrl.match(/^\/posts-details\/\d+$/)) {
          // Return to the "posts-details/:id" route
          this.router.navigateByUrl(returnUrl);
        }else{


          this.router.navigate(['/', 'home']);
        }



      }
      else {

        console.log('Passwords do not match');
        this.uiService.warn("User id or passwords does not match");
      }
    }
    else{
      this.uiService.wrong("Somthing is rong");
      console.log('Form is invalid');

    }

  }




  ngOnDestroy() {
    if (this.userIdSubscription || this.passwordSubscription) {
      this.userIdSubscription.unsubscribe();
      this.passwordSubscription.unsubscribe();
    }
  }
}















