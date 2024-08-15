import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';



@NgModule({
  declarations: [
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ThirdComponent,
    FourthComponent
  ]
})
export class SecondaryModule { }
