import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsDetailsComponent } from './posts-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';
import { FormsModule } from '@angular/forms';
import {DialogModule} from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    PostDetailsRoutingModule,
    FormsModule,
    DialogModule,
    MatDialogModule
  ]
})
export class PostsDetailsModule { }
