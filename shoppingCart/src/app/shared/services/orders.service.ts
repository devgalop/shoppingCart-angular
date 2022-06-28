import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order.interface';
import { OrderDetail } from '../interfaces/orderDetail.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlBase: string = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) {}

  saveOrder(order : Order): Observable<Order> {
    return this.httpClient.post<Order>(this.urlBase+'/orders', order);
  }

  saveOrderDetails(orderDetails : OrderDetail): Observable<OrderDetail>{
    return this.httpClient.post<OrderDetail>(this.urlBase+'/detailsOrders', orderDetails);
  }
}
