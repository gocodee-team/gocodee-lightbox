import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GocodeeLightboxModule } from 'gocodee-lightbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GocodeeLightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
