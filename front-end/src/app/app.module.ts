import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PageComponetsModule} from './page-componets/page-componets.module';
import {LayoutComponentsModule} from './layout-components/layout-components.module';
import {ToastrModule} from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PageComponetsModule,
    LayoutComponentsModule,
    ToastrModule.forRoot({
      closeButton: false,
      positionClass: 'toast-top-right'
    }),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
