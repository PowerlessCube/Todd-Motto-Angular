import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-one',
  // default for angular style, no need to specifiy it.
  encapsulation: ViewEncapsulation.Emulated, // Output an emulation of the shadowdom in the browser.
  styles: [`
    .example-one {
      background: #9f72e6;
      font-size: 19px;
      color: #fff;
      margin-bottom: 50px;
      padding: 10px 20px;
    }
  `],
  template: `
    <div class="example-one">
      Example One
    </div>
  `
})
export class ExampleOneComponent {

}
