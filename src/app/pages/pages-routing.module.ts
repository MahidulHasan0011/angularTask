import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UserAuthStateGuard } from '../auth-guard/user-auth-state.guard';


const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    // redirectTo: "posts",
    //     pathMatch: "full",
        children:[
          {
            path: '',
            redirectTo: "home",
            pathMatch: "full"
          },
          {
            path: "home",
            loadChildren: () => import('./posts/posts.module').then(m => m.PostModule),

          },

          {
            path: "posts-details/:id",
            loadChildren: () => import('./posts-details/posts-details.module').then(m => m.PostsDetailsModule),

          },




          {
            path:'sign-up',
            canActivate: [UserAuthStateGuard],
            loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule),
            data: {preload: false, delay: false ,showHeader: false},
          },{
            path:'sign-in',
            canActivate: [UserAuthStateGuard],
            loadChildren:()=>import('./signin/signin.module').then(m=>m.SigninModule),
            data: {preload: true, delay: false,showHeader: false  },
          }
        ]

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ UserAuthStateGuard]
})
export class PagesRoutingModule { }
