import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDetailsComponent } from './posts-details.component';

const routes: Routes = [
  {
    path:"",
    component:PostsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailsRoutingModule { }
