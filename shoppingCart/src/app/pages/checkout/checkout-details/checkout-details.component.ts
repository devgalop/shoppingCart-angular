import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.css']
})
export class CheckoutDetailsComponent implements OnInit { 
  total$ = this.cartSvc.totalAction$;
  cart$ = this.cartSvc.cartAction$;

  tableColumns!:string[];

  constructor(private cartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.tableColumns = ['Item','Quantity','Unit Price', 'SubTotal']
  }

}
