import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './posts-routing.module';
import { PostComponent } from './posts.component';



@NgModule({
  declarations: [

    PostComponent
    //
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class PostModule { }
