import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit">

        <stock-branch
          [parent]="form">
        </stock-branch>
        <!-- Pass that data down to the components -->
        <stock-selector
          [parent]="form"
          [products]="products">
        </stock-selector>

        <stock-products
          [parent]="form">
        </stock-products>

        <div class="stock-inventory__buttons">
          <button type="submit"
            [disabled]="form.invalid">
            Order Stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent {
  // We're going to pass the products down into the stock selector wiht a view to performing CRUD operations on them
  products: Product[] = [
      { "id": 1, "price": 2800, "name": "MacBook Pro" },
      { "id": 2, "price": 50, "name": "USB-C Adaptor" },
      { "id": 3, "price": 400, "name": "iPod" },
      { "id": 4, "price": 900, "name": "iPhone" },
      { "id": 5, "price": 600, "name": "iWatch" }
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    // We have the selector that is part of our form group, creating a nested FormGroup.
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  })

  onSubmit() {
    console.log('Submit: ', this.form.value);
  }
}
