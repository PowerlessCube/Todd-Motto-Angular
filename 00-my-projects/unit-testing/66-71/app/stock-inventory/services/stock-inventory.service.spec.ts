//Testing services that have dependencies
import { Http, Response, ResponseOptions } from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// Get out stockInventory service in.
import { StockInventoryService } from './stock-inventory.service';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Helper function that wraps things in an observale and uses angulars apis
function createResponse(body) {
  return Observable.of(
    // Returns a body of the data that was passed in
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}
//Class for mocking the HttpService
class MockHttp {
  get() {
    return createResponse([]);
  }
}
// Mock data
const cartItems = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 5 }];
const productItems = [{ id: 1, price: 10, name: 'Test' }, { id: 2, price: 100, name: 'Another Test' }];

describe('StockInventoryService', () => {
  
  let service: StockInventoryService;
  let http: Http;

  beforeEach(() => {
    // Get our test bed in.
    const bed = TestBed.configureTestingModule({
      // need to pass in a custom provider for the http
      providers: [
        StockInventoryService,
        // override it with our mock http for testing
        { provide: Http, useClass: MockHttp }
      ]
    });
  });

});