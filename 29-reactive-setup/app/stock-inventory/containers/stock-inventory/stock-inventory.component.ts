import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

//Source of truth

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit">
        <!-- Have to give it a form group Name-->
        <div formGroupName="store">
          <input
            type="text"
            placeholder="Branch ID"
            formControlName="branch">
          <input
            type="text"
            placeholder="Manager Code"
            formControlName="code">
        </div>
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
  form = new FormGroup({
    // Create our own form group and own form control, group is a nice wrapper to group a set of controls
    store: new FormGroup({
      // '' is our initial value. Control allows user to interact with it
      branch: new FormControl('B182'),
      code: new FormControl('1234')
    })
  })
  // Unlike template driven forms not passing anything through these function arguments
  onSubmit() {
    console.log('Submit: ', this.form.value);
  }
}
