import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-products',
  styleUrls: ['stock-products.components.scss'],
  template: `
    <div class="stock-product" [formGroup]="parent">
      stock-products
    </div>
  `
})

export class StockProductsComponent {

  @Input()
  parent: FormGroup;

}
