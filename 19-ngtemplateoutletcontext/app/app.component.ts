// how to pass context to our template via ngTemplateOutlet
import { Component } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  // Use of directive ngTemplateOutletContext to pass in context value
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx">
      </ng-container>
      <template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </template>
    </div>
  `
})
export class AppComponent {
  // Creating a context variable - declaritive way of doing this.
  ctx = {
    $implicit: 'Todd Motto',
    location: 'England, UK'
  };
}