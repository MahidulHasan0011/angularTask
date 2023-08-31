import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: "posts",
    //
        pathMatch: "full"

  }, {
    path: "posts",
    loadChildren: () => import('./posts/posts.module').then(m => m.HomeModule)
  },
  {
    path: "posts-details",
    loadChildren: () => import('./posts-details/post-details.module').then(m => m.PostDetailsModule)
  },
  {
    path:'sign-up',
    loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule)
  },{
    path:'sign-in',
    loadChildren:()=>import('./signin/signin.module').then(m=>m.SigninModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
