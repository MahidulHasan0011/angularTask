
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomLoginModalComponent } from '../shared/custom-login-modal/custom-login-modal.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openLoginDialog(): void {
    this.dialog.open(CustomLoginModalComponent, {
      width: '300px', // Set the desired width

      disableClose: true, // Prevent closing by clicking outside
    });
  }

  closeLoginDialog(): void {
    this.dialog.closeAll();
  }
}
