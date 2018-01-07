import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// New API - reactiveFormsmodule
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

@NgModule({
  declarations: [
    StockInventoryComponent
  ],
  imports: [
    CommonModule,
    //It uses the component code as the source of truth rather than our template for our model
    ReactiveFormsModule
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule {}
