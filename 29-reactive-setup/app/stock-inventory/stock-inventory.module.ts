import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// 1. add Http Module from angular
import { HttpModule } from '@angular/http';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.components';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';

import { StockInventoryService } from './services/stock-inventory.service';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent
  ],
  // service is provider
  providers: [
    StockInventoryService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // 2. add it to our imports
    HttpModule
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule {}
