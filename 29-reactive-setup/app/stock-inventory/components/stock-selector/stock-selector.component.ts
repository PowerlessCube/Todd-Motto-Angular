import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-selector',
  // styleUrls: ['stock-selector.components.scss'],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      stock-selector
    </div>
  `
})

export class StockSelectorComponent {

  @Input()
  parent: FormGroup;

}
