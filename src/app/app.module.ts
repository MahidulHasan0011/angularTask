import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { PagesModule } from './pages/pages.module';
import { counterReducer } from './state/counter.reducer';



@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    StoreModule.forRoot({userInfo:counterReducer  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
