import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
