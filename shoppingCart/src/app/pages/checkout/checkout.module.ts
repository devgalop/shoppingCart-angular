import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { CheckoutDetailsComponent } from './checkout-details/checkout-details.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckoutRoutingModule,
    MaterialModule
  ]
})
export class CheckoutModule { }
