// Change the container div to use a directive called ng-template outlet
import { Component } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  // ng-container is a simple container that doesn't get rendered to the dom.
  // Use ngTemplateOutlet directive for passing the template ref into it.
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl">
      </ng-container>
      <template #tmpl>
        Todd Motto : England, UK
      </template>
    </div>
  `
})
export class AppComponent {

}