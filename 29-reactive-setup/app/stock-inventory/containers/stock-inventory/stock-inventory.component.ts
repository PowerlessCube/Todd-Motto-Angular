// Import OnInit for our service injection
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
//We're going to use an Observable to merge our API request.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { StockInventoryService } from '../../services/stock-inventory.service';

import { Product, Item } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styles: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <stock-branch
          [parent]="form">
        </stock-branch>
        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)">
        </stock-selector>

        <stock-products
          [parent]="form"
          [map]="productMap"
          (removed)="removeStock($event)">
        </stock-products>

        <div class="stock-inventory__buttons">
          <button
            type="submit"
            [disabled]="form.invalid">
            Order Stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [];
  // number will be the looker and product will stored against the number
  productMap: Map<number, Product>; // { 1: Product }

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  })

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ){}

  ngOnInit() {
    // assign our service calls to varibales
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    // Merge them using rxjs forkjoin = acts like a promise all
    Observable
      .forkJoin(cart, products)
      // Destructure the data and Type Check it
      .subscribe(([cart, products]: [Item[], Product[]]) => {
        // map over cart and products and pass them down to stock products
        // Create New instance of productMap
        const myMap = products
          .map<[number, Product]>(product => [product.id, product]);
          //Need to set this in the map - set it as a collection
          this.productMap = new Map<number, Product>(myMap);
          // Bind the products
          this.products = products;
          // iterate over the item and use addStock Function to add item
          cart.forEach(item => this.addStock(item));

      })
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }
  removeStock({ group, index }: { group: FormGroup, index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index)
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
