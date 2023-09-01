import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsDetailsComponent } from './posts-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';



@NgModule({
  declarations: [
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    PostDetailsRoutingModule
  ]
})
export class PostsDetailsModule { }
