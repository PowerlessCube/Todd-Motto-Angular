import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class FoodService {
  constructor(
    private http: Http,
    // Manually injecting our API using the inject.
    @Inject("api") private api: string
  ) {}
  getFood(): Observable<any[]> {
    // then it can use "this.api"
    return this.http.get(this.api).map(response => response.json());
  }
}
