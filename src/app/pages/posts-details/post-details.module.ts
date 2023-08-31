import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostsDetailsComponent } from './posts-details.component';


@NgModule({
  declarations: [
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    PostDetailsRoutingModule
  ]
})
export class PostDetailsModule { }
