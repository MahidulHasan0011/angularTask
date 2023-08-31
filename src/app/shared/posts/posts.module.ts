import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { HeaderModule } from 'src/app/core/header/header.module';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class PostsModule { }
