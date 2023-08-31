import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    // redirectTo: "posts",
    //     pathMatch: "full",
        children:[
          // {
          //   path: '',
          //   redirectTo: "posts",
          //   pathMatch: "full"
          // },
          {
            path: "",
            loadChildren: () => import('./posts/posts.module').then(m => m.PostModule)
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
        ]

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
