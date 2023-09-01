import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { counterReducer } from './state/counter.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { postsReducer } from './state/posts.reducer';
import { PostsEffects } from './state/posts.effects';


@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,

    // PortalModule,
    StoreModule.forRoot({ userInfo: counterReducer ,postes: postsReducer }),
    EffectsModule.forRoot([PostsEffects]),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







