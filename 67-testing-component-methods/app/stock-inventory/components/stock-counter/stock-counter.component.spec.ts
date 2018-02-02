/* Testing Component Methods */

import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

import { StockCounterComponent } from "./stock-counter.component";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("StockCounterComponent", () => {
  // setting up our variables
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    // Setting up the TestBed module
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent]
    });
    // override our variables.
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    // Default value of 0
    component.value = 0;
  });

  it("should increment correctly", () => {
    // call the increment method and check the value is 1.
    component.increment();
    expect(component.value).toBe(1);
  });

  it("should decrement correctly", () => {
    // call the dectement method to check that it's 0.
    component.increment();
    expect(component.value).toBe(1);
    // Call the decrement
    component.decrement();
    expect(component.value).toBe(0);
  });

  it("should not decrement below the minimum value", () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
    // we expect it not to go below -1
    component.decrement();
    expect(component.value).toBe(0);
  });

  it("should not increment below the maximum value", () => {
    // increments all the way up to 200
    for (let i = 0; i < 200; i++) {
      component.increment();
    }
    // expects it won't go over 200.
    expect(component.value).toBe(100);
  });
});
