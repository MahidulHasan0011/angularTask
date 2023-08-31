import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



const materials = [


  // 1
  MatDialogModule,


  // 2
  MatSnackBarModule,


  // 3
  MatBottomSheetModule,

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materials
  ],
  exports: [
    ...materials
  ]
})
export class MaterialModule {
}
