import { Component, OnInit } from '@angular/core';
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
  stores!: Store[];
  constructor(private readonly storesSvc: StoresService) {}

  ngOnInit(): void {
    this.storesSvc.getStores()
        .subscribe(stores => this.stores = stores);
  }

  onPickupOrDelivery(isDelivery: boolean): void {}
}
