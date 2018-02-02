/* Testing the user interaction in our template */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { DebugElement } from "@angular/core";
import { StockCounterComponent } from "./stock-counter.component";
// import By from the following platform-browser section.
import { By } from "@angular/platform-browser";

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe("StockCounterComponent", () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent]
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.value = 0;
  });

  it("should increment when the + button is clicked", () => {
    // Grab the first button element
    el.query(By.css("button:first-child")).triggerEventHandler("click", null);
    //Check for changes
    fixture.detectChanges();
    expect(component.value).toBe(1);
    //check that the value in the paragraph value is also equal to 1.
    expect(el.query(By.css("p")).nativeElement.textContent).toBe("1");
  });

  it("should increment the value when the up arrow is pressed", () => {
    // Checks the keydown press works. we need a new event object.
    const event = new Event("KeyboardEvent") as any; // new event construct.
    event.code = "ArrowUp"; // assign it the value of arrow up
    // Create our own custom event.
    el
      .query(By.css(".stock-counter > div > div"))
      .triggerEventHandler("keydown", event); // trigger the keydown event
    fixture.detectChanges();
    expect(component.value).toBe(1); // check the value increments.
  });
});
