import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
  ],
  exports: [
    HomePageComponent,
    NotFoundPageComponent,
  ]
})
export class PageComponetsModule { }
