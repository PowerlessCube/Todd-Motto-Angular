import { Component, Input, forwardRef } from '@angular/core';
// New imports from forms
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

// Overall-goal: Register our counter component and extend NG Accessor to allow our component to talk to the form groups
// Setup our custom Provider - registers our stock counter component
const COUNTER_CONTROL_ACCESSOR = {
  // Extends the NG_VALUE_ACCESSOR
  provide: NG_VALUE_ACCESSOR,
  // ForwardRef is allowing us to hoist component
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};



@Component({
  selector: 'stock-counter',
  // Implement it in the provider
  providers: [COUNTER_CONTROL_ACCESSOR],
  styleUrls: ['stock-counter.component.scss'],
  template: `
    <div class="stock-counter">
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <button
              type="button"
              (click)="increment()"
              [disabled]="value === max">
              +
            </button>
            <button
              type="button"
              (click)="decrement()"
              [disabled]="value === min">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})

// Implement ControlValueAccessor
export class StockCounterComponent implements ControlValueAccessor {
  // Create private values
  private onTouch: Function;
  private onModelChange: Function;

  // Required functions of the implementation of ControlValueAccessor
  registerOnTouched(fn) {
    // Assigning to our internal function
    this.onTouch = fn
  }

  registerOnChange(fn) {
    // called when our model has changed.
    this.onModelChange = fn;
  }

  // Any initial value or changed value
  writeValue(value){
    // reassigns to our value.
    this.value = value || 0;
  }
  // till here.

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      // passes the value into the Model change
      this.onModelChange(this.value);
    }
    // Notifys the Control that our component has been interacted with
    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
