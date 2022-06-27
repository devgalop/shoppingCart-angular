import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private urlBase:string = 'http://localhost:3000/stores'

  constructor(private readonly _httpClient : HttpClient) { }

  getStores(): Observable<Store[]> {
    return this._httpClient.get<Store[]>(this.urlBase);
  }
}
