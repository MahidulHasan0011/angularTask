import {Component, Inject, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-notification',
  templateUrl: './snackbar-notification.component.html',
  styleUrls: ['./snackbar-notification.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class SnackbarNotificationComponent{

  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarNotificationComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ) { }

}
