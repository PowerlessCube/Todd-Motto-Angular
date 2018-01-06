// 1. import a directive
import { Directive, ElementRef } from '@angular/core';

// 3. add a decorator, that takes a configuration object.
@Directive({
  // 4. create an attribute selector square brackets denotes that it's an element attribute
  selector: '[credit-card]'
})
// 2. Create our CreditCard directive class
export class CreditCardDirective {
  // 5. injecting stuff into construct
  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}

// Note - the only thing you can't do inside a directive is to declare a template.