import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../models/product.interface';

// Providing all the data from our smart component "Stock-inventory" to our stateless component
@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <!-- Bind our formGroup to this div -->
      <div formGroupName="selector">
        <select fromControlName="product_id">
          <option value="">Select stock</option>
          <!-- Binds the value to the product.id -->
          <option
            *ngFor="let product of products"
            [value]="product.id">
            {{product.name}}
          </option>
        </select>
        <input
          type="number"
          step="10"
          min="10"
          max="1000"
          formControlName="quantity">
        <button type="button">
          Add Stock
        </button>
      </div>
    </div>
  `
})

export class StockSelectorComponent {

  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];

}
