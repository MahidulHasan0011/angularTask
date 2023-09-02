import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custom-login-modal',
  templateUrl: './custom-login-modal.component.html',
  styleUrls: ['./custom-login-modal.component.css']
})
export class CustomLoginModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CustomLoginModalComponent>,private router: Router,
  ) { }

  ngOnInit(): void {
  }
  navigateLogin(){
    const returnUrl = this.router.url
    this.router.navigate(['/', 'sign-in'],{ queryParams: { returnUrl } });
    this.dialogRef.close()
  }



}

