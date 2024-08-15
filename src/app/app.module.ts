import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondaryModule } from './secondary/secondary.module';
import { PrimaryModule } from './primary/primary.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    PrimaryModule,
    SecondaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
