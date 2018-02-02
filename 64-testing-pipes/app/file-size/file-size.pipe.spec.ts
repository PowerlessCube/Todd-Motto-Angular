import { Component } from "@angular/core";
// Rquired imports for creating you test bed.
import { TestBed, ComponentFixture } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing"; // creates our test bed for invoking models and components to test against.

// How to create our test bed
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

import { FileSizePipe } from "./file-size.pipe";

describe("FileSizePipe", () => {
  describe("Shallow FileSizePipe test", () => {
    // Creates a test component for us.
    @Component({
      template: `
        Size: {{ size | filesize:suffix }}
      `
    })
    // create a size which we bind via our component
    class TestComponent {
      suffix;
      size = 123456789;
    }
    // Create place holders
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>; // holds information about our mounted component
    let el: HTMLElement;

    // Before each test is run we
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [FileSizePipe, TestComponent]
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it("should convert bytes to megabytes", () => {
      component.suffix = "myExt";
      fixture.detectChanges();
      expect(el.textContent).toContain("Size: 117.74myExt");
    });

    it("should use the default extension when not supplied", () => {
      fixture.detectChanges(); // calls on changes
      // textContent access properties on our HTMLelements
      expect(el.textContent).toContain("Size: 117.74MB");
    });
  });

  describe("Isolate FileSizePipe test", () => {
    const pipe = new FileSizePipe();

    it("should convert bytes to megabytes", () => {
      expect(pipe.transform(123456789)).toBe("117.74MB");
      expect(pipe.transform(987654321)).toBe("941.90MB");
    });

    it("should use the default extension when not supplied", () => {
      expect(pipe.transform(123456789)).toBe("117.74MB");
      expect(pipe.transform(987654321)).toBe("941.90MB");
    });

    it("should override the extension when supplied", () => {
      expect(pipe.transform(123456789, "myExt")).toBe("117.74myExt");
      expect(pipe.transform(987654321, "anotherExt")).toBe("941.90anotherExt");
    });
  });
});
