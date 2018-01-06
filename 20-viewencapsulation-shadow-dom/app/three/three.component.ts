import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  // None - We don't enter the view encapsulation mode.  We are opening up this component up to pass styles to other components.
  // Warning - probably might want to avoid this in future.
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .example-one {
      border: 2px solid green;
    }
  `],
  template: `
    <div class="example-three">
      Example Three
    </div>
    <div class="example-one">
      Example One!
    </div>
  `
})
export class ExampleThreeComponent {

}
