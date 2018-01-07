import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input
          type="text"
          placeholder="Branch ID"
          formControlName="branch">
        <div class="error"
          *ngIf="required('branch')">
            Branch ID is required
        </div>
        <div class="error"
          *ngIf="invalid">
            Invalid branch code: 1 letter, 3 numbers
        </div>
        <input
          type="text"
          placeholder="Manager Code"
          formControlName="code">
        <div class="error"
          *ngIf="required('code')">
            Branch ID is required
        </div>
      </div>
    </div>
  `
})

export class StockBranchComponent {

  @Input()
  parent: FormGroup;

  // used a getter to check if branch was valid
  get invalid() {
    return(
      // if has code of invalidBranch
      this.parent.get('store.branch').hasError('invalidBranch') &&
      // And the user has made a typing attempt
      this.parent.get('store.branch').dirty &&
      // Required state is not invalid (don't want to show the required message at the same time)
      !this.required('branch')
    )
  }

  required(name: string) {
    return (
      this.parent.get(`store.${name}`).hasError('required') &&
      this.parent.get(`store.${name}`).touched
    )
  }
}
