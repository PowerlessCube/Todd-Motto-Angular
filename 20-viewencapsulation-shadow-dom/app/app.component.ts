// Three different types of ViewEncapsulation in Angular
// Component one has default - emulates how shadow dom works
// Component two has full native - Supports Shadow DOM (not all browsers support it)
// Component Three has none - So it's writing global styles to the DOM.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <example-one></example-one>
      <example-two></example-two>
      <example-three></example-three>
    </div>
  `
})
export class AppComponent {
}
