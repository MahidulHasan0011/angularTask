import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../core/header/header.module';
import { PostModule } from './posts/posts.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    PostModule,
    MaterialModule,
  ]

})
export class PagesModule { }
