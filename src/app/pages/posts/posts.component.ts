import { Component, OnInit, inject } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';
// import {FormsModule} from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-home',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  // standalone: true,
  // imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule],
})
export class PostComponent implements OnInit {
  durationInSeconds = 5;
  constructor(
      // private _snackBar: MatSnackBar,
      public uiService: UiService
    ) { }

  ngOnInit(): void {
  }

  click(){
    // this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
    console.log("is it this click?");

    // this.uiService.success("ffhfhf")
    // this._snackBar.open("is it this click?");
  }
}



@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  template: `
    <span class="example-pizza-party" matSnackBarLabel>
      Pizza party!!!
    </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">🍕</button>
    </span>
  `,
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}

