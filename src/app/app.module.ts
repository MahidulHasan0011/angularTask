import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { counterReducer } from './state/user.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { postsReducer } from './state/posts.reducer';
import { PostsEffects } from './state/posts.effects';
import { CommentEffects } from './state/comment.effects';
import { commentReducer } from './state/comment.reducer';
import { CustomLoginModalComponent } from './shared/custom-login-modal/custom-login-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule,

    // PortalModule,
    StoreModule.forRoot({ userInfo: counterReducer ,posts: postsReducer ,comments :commentReducer}),
    EffectsModule.forRoot([PostsEffects ,CommentEffects]),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }













