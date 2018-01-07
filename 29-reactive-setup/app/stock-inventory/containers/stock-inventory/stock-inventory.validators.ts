import { AbstractControl } from '@angular/forms';

export class StockValidators {
  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i; // A123
    const valid = regexp.test(control.value);
    return valid ? null : { invalidBranch: true };
  }

  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');
    // Best to check if they exist
    if (!(stockItem && selector)) return null;

    // iterate through the cart and checks if the product_ids match the product_id we have selected
    const exists = stockItem.value.some((stock) => {
      return stock.product_id === parseInt(selector.value.product_id);
    });
    // return and object based on result of exists
    return exists ? {stockExists: true } : null;

  }
}
