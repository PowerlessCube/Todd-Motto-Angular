import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Add in our Module
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
