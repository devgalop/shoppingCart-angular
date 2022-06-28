import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { Order } from 'src/app/shared/interfaces/order.interface';
import { OrderDetail } from 'src/app/shared/interfaces/orderDetail.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Store } from '../../shared/interfaces/store.interface';
import { StoresService } from '../../shared/services/stores.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  model = {
    name: '',
    store: '',
    shippingAddress: '',
    city: '',
  };
  isDelivery:boolean = false;
  cart: Product[] = [];
  stores!: Store[];
  orderAdded! : Order;
  constructor(
    private readonly storesSvc: StoresService, 
    private readonly ordersSvc: OrdersService,
    private readonly cartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.storesSvc.getStores()
        .subscribe(stores => this.stores = stores);
    this.getCartItems();
  }

  onPickupOrDelivery(isDelivery: boolean): void {
    this.isDelivery = isDelivery;
  }

  onSubmit({value : formData}:NgForm):void{
    const data : Order = {
      ... formData,
      date:this.getCurrentDate(),
      pickup: this.isDelivery
    }
    console.log(data);
    this.ordersSvc.saveOrder(data)
    .pipe(
      tap(res => {
        console.log('order:' + res);
        this.orderAdded = res
        console.log(this.orderAdded);
        const details : OrderDetail[] = this.prepareDetails(this.orderAdded);
        details.forEach((detail : OrderDetail)=>{
          this.ordersSvc.saveOrderDetails(detail)
          .pipe(
            tap(res => console.log('detail Added' + res))
          )
          .subscribe();
        })
        
      })
    )
    .subscribe();
    
  }

  private getCurrentDate():string{
    return new Date().toLocaleDateString();
  }

  private prepareDetails(order : Order):OrderDetail[]{
    const details: OrderDetail[] = [];
    this.cart.forEach((product: Product) => {
      const detail : OrderDetail ={
        orderId: order.id,
        productName: product.name,
        quantity: product.quantity
      }
      console.log('details:'+detail);
      details.push(detail);
    })
    return details;
  }

  private getCartItems() : void{
    this.cartSvc.cartAction$
    .pipe(
      tap((products : Product[]) => this.cart = products)
    )
    .subscribe();
  }

}
