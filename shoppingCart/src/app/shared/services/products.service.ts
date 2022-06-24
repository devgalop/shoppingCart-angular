import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private urlBase:string = 'http://localhost:3000/products'

  constructor(private readonly _httpClient : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.urlBase);
  }

}
