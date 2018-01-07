import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

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

  getCartItems(): Observable<Item[]> {
    return this.http
      .get('/api/cart')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get('/api/products')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  // 2. Set up BranchCheck service call
  checkBranchId(id: string): Observable<boolean> {
    // create a search param
    let search = new URLSearchParams();
    // set a param of id and pass in our id
    search.set('id', id);
    return this.http
      //pass our search option in
      .get('/api/branches', { search })
      // map through the response
      .map((response: Response) => response.json())
      // map again checking that length is not 0
      .map((response: any[]) => !!response.length)
      // catch block for errors
      .catch((error: any) => Observable.throw(error.json()));
  }
}
