// Import our Injectable and canDeactivate
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
// Passing in a MailViewComponent
import { MailViewComponent } from './mail-view.component';

@Injectable()
// This is a guard for a specific component
export class MailViewGuard implements CanDeactivate<MailViewComponent> /*need to pass a generic type into this interface*/ {
  // We get access to the component in our guard and can therefore check some of the values for boolean logic.
  canDeactivate(component: MailViewComponent) {
    // if changes unsaved
    if (component.hasUnsavedChanges) {
      // alert the user.
      return window.confirm('Are you sure you want to leave?');
    }
    // We can go ahead and deactivate (navigate away from the route)
    return true;
  }
}