import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './posts-routing.module';
import { PostComponent } from './posts.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    //
    PostComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSnackBarModule,
  ]
})
export class PostModule { }
