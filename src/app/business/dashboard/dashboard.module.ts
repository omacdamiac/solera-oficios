import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ItemModule } from 'src/app/commons/components/item/item.module';
import { SharedModule } from 'src/app/commons/shared/shared.module';
import { InputModule } from 'src/app/commons/components/input/input.module';
import { ButtonModule } from 'src/app/commons/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OficiosService } from './commons/services/oficios.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ItemModule,
    InputModule,
    ButtonModule,
  ],
  providers: [OficiosService]
})
export class DashboardModule { }
