import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  // Hostlistener - pass in the event - host is the element we have bound the directive too.
  @HostListener('input', ['$event'])

  // create our js function
  onKeyDown(event: KeyboardEvent) {
    // casts event.target to the type HTMLInputElement
    const input = event.target as HTMLInputElement;

    // Regex that removes whitespace
    let trimmed = input.value.replace(/\s+/g, '');
    // Check if trimmed length is above 16
    if (trimmed.length > 16) {
      // grabs the first and last character restricts string length to 16.
      trimmed = trimmed.substr(0, 16);
    }

    // Creates a space of 4 for each credit card number
    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    // assign the value back and join (every 4 chars will be sep by space)
    input.value = numbers.join(' ');

  }
}
