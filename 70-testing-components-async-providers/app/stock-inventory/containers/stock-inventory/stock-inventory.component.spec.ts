/* Testing a Component with an async provider */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { DebugElement } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { StockInventoryComponent } from "./stock-inventory.component";
import { StockBranchComponent } from "../../components/stock-branch/stock-branch.component";
import { StockCounterComponent } from "../../components/stock-counter/stock-counter.component";
import { StockProductsComponent } from "../../components/stock-products/stock-products.component";
import { StockSelectorComponent } from "../../components/stock-selector/stock-selector.component";
import { StockInventoryService } from "../../services/stock-inventory.service";

// Grabbing our Observables.
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Mimic our StockInventoryService
class MockStockInventoryService {
  getProducts() {
    // Mocking our data.
    return Observable.of([
      { id: 1, price: 10, name: "Test" },
      { id: 2, price: 100, name: "Another test" }
    ]);
  }
  getCartItems() {
    return Observable.of([
      { product_id: 1, quantity: 10 },
      { product_id: 2, quantity: 5 }
    ]);
  }
}
// Using our service and overiding it from the component it's self.
describe("StockInventoryComponent", () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;
  let el: DebugElement;
  let service: StockInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockCounterComponent,
        StockProductsComponent,
        StockSelectorComponent
      ],
      // Mockup our StockInventory Service
      providers: [
        { provide: StockInventoryService, useClass: MockStockInventoryService }
      ]
    });

    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    service = el.injector.get(StockInventoryService);
  });

  it("should get cart items and products on init", () => {
    // Create a few spys for our gets.
    spyOn(service, "getProducts").and.callThrough();
    spyOn(service, "getCartItems").and.callThrough();
    // component.ngOninit
    component.ngOnInit();
    //expecting that the gets have been called.
    expect(service.getProducts).toHaveBeenCalled();
    expect(service.getCartItems).toHaveBeenCalled();
  });

  it("should create a product map from the service response", () => {
    component.ngOnInit();
    // we pass it a product ID and it returns back an object.
    expect(component.productsMap.get(1)).toEqual({
      id: 1,
      price: 10,
      name: "Test"
    });
    // Check for another product maps
    expect(component.productsMap.get(2)).toEqual({
      id: 2,
      price: 100,
      name: "Another test"
    });
  });
  // Checking that the product map stores the products.
  it("should store the products response", () => {
    component.ngOnInit();
    expect(component.products).toEqual([
      { id: 1, price: 10, name: "Test" },
      { id: 2, price: 100, name: "Another test" }
    ]);
  });

  it("should create a stock item for each cart item", () => {
    spyOn(component, "addStock");
    component.ngOnInit();
    // checks our component addstock had been called with
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 1,
      quantity: 10
    });
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 2,
      quantity: 5
    });
  });
});
