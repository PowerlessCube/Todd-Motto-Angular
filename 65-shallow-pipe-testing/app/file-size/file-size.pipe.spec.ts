// learn how to instantiate our filesize pipe in a component
import { Component } from '@angular/core';
// imported the testBest and componentFixture
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// initialised our test environment
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

import { FileSizePipe } from './file-size.pipe';
// Created a fake virtual component
describe('FileSizePipe', () => {

  describe('Shallow FileSizePipe test', () => {

    @Component({
      template: `
        Size: {{ size | filesize:suffix }}
      `
    })
    class TestComponent {
      // set up place holders
      suffix;
      size = 123456789;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      // Ng module for testing purposes 
      TestBed.configureTestingModule({
        declarations: [
          FileSizePipe,
          TestComponent
        ]
      });
      // Instantiate test component
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    // Test part section
    it('should convert bytes to megabytes', () => {
      // call things like ngOnit and other internal workings
      fixture.detectChanges();
      // Similar to the innerHTMLcontent
      expect(el.textContent).toContain('Size: 117.74MB');
      // We're changing the element size
      component.size = 1029281;
      // calling another change detection
      fixture.detectChanges();
      // Checking result against expectation
      expect(el.textContent).toContain('Size: 0.98MB');
    });

    it('should use the default extension when not supplied', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74MB');
    });

    it('should override the extension when supplied', () => {
      component.suffix = 'myExt';
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74myExt');
    });

  });

  describe('Isolate FileSizePipe test', () => {
    
    const pipe = new FileSizePipe();

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
      expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
    });
  });

});