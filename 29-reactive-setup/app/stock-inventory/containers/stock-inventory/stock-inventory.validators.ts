import { AbstractControl } from '@angular/forms';

export class StockValidators {
  // Static makes the method accessable without having to call new stockvalidators
  // Type checking against the AbstractControl
  static checkBranch(control: AbstractControl) {
    // regex that checks the correct format
    const regexp = /^[a-z]\d{3}$/i; // A123
    // Check if the control value is valid
    const valid = regexp.test(control.value);
    // if valid return true else return invalidBranch true
    return valid ? null : { invalidBranch: true };
  }
}
