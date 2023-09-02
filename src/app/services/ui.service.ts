import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {MatDialog} from '@angular/material/dialog';

import {MatBottomSheet} from '@angular/material/bottom-sheet';

import {Router} from '@angular/router';
import { SnackbarNotificationComponent } from '../shared/posts/snackbar-notification/snackbar-notification.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,

  ) {
  }


  /**
   * SNACKBAR
   */
  success(msg?:string) {
    console.log("message", msg);

    this.snackBar.openFromComponent(SnackbarNotificationComponent, {
      data: msg,
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['notification', 'success-new']
    });
  }

  warn(msg?:string) {
    this.snackBar.openFromComponent(SnackbarNotificationComponent, {
      data: msg,
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['notification', 'warn']
    });
  }

  wrong(msg?:string) {
    this.snackBar.openFromComponent(SnackbarNotificationComponent, {
      data: msg,
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['notification', 'wrong']
    });
  }



}
