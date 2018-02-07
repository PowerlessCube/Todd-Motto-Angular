import { DebugElement, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
import { By } from "@angular/platform-browser";
// Import our directive
import { CreditCardDirective } from "./credit-card.directive";

// Set up the test bed component
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

@Component({
  // Setup our input with a bound value and custome attr "credit-card"
  template: `
    <input type="text" [value]="value" credit-card>
  `
})
// start it off with an incomplete card number
class TestComponent {
  value = 123456;
}

describe("CreditCardDirective", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it("should format the string with spaces", () => {
    // How to trigger events for angular apps.
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement; // Go in and look at our CreditCardElement
    directive.value = "475123";
    // dispatch a custom event.
    directive.dispatchEvent(new Event("input"));
    expect(directive.value).toBe("4751 23");
    // change the value
    directive.value = "4751239812019201";
    directive.dispatchEvent(new Event("input"));
    expect(directive.value).toBe("4751 2398 1201 9201");
  });

  it("should have a max-length of 16 characters", () => {
    const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
    directive.value = "4751239812019201998394282394823";
    directive.dispatchEvent(new Event("input"));
    expect(directive.value).toBe("4751 2398 1201 9201");
  });
});
