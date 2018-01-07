import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(
    private http: Http
  ) {}

  // Both methods return an observable,
  getCartItems(): Observable<Item[]> {
    return this.http
      .get('/api/cart')
      // immutable object response in json
      .map((response: Response) => response.json())
      // Catch Errors and return as json
      .catch((error: any) => Observable.throw(error.json()));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get('/api/products')
      // immutable object response in json
      .map((response: Response) => response.json())
      // Catch Errors and return as json
      .catch((error: any) => Observable.throw(error.json()));
  }


}
