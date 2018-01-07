// Add HostBinding
import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  // HostBinding = allows us to communicate with our host node and change the value of a property.
  @HostBinding('style.border')
  border: string;
  // you could bind classes to your host DOM element:
  // @HostBinding('class') classes = 'a b c'

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

    // empty the string
    this.border = '';
    // use the test method on our trimmed.
    if (/[^\d]+/.test(trimmed)) {
      // means the border is solid red if invalid.
      this.border = '1px solid red';
    }

  }
}
