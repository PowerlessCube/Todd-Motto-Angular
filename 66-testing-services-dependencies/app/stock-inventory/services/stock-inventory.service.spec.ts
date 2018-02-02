// 5. Import the Http Response options
import { Http, Response, ResponseOptions } from "@angular/http";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
// 1. Grab our service
import { StockInventoryService } from "./stock-inventory.service";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

function createResponse(body) {
  // 4. wrap it in an Observable
  return Observable.of(
    // response option with stringify body. helper function that uses Angular's APIs
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}
// 3. Create a Mock HTTP - initialisze it with an empty array.
class MockHttp {
  get() {
    return createResponse([]);
  }
}
// 7. Mock data
const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 }
];
const productItems = [
  { id: 1, price: 10, name: "Test" },
  { id: 2, price: 100, name: "Another Test" }
];

describe("StockInventoryService", () => {
  // variables
  let service: StockInventoryService;
  let http: Http;

  beforeEach(() => {
    // 2. Generate our test bed
    const bed = TestBed.configureTestingModule({
      // overiding this Http with our own mock one for testing
      providers: [StockInventoryService, { provide: Http, useClass: MockHttp }]
    });
    // assign mock values to our tests.
    http = bed.get(Http);
    service = bed.get(StockInventoryService);
  });

  // 8. cast assertions
  it("should get cart items", () => {
    // SpyOn http and get and check that our mock values come back from our createResponse section.
    // spread operator used here to keep it immutable.
    spyOn(http, "get").and.returnValue(createResponse([...cartItems]));
    // log out the result and check they match.
    service.getCartItems().subscribe(result => {
      expect(result.length).toBe(2);
      expect(result).toEqual(cartItems);
    });
  });

  // 9. duplicate and check the same for the product items
  it("should get product items", () => {
    spyOn(http, "get").and.returnValue(createResponse([...productItems]));

    service.getProducts().subscribe(result => {
      expect(result.length).toBe(2);
      expect(result).toEqual(productItems);
    });
  });
});
