import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  // Dynamically create, pass data down and subscribe to it. Create a placeholder div that inject the component into it.
  template: `
    <div>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  // Using template ref entry - communicate directly with this dom to inject these components.
  // Read Property: Changes what we get back
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  // Create a constructor - inject something called a resolver, allows us to create a componentFactory based on our dynamic component.
  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  // Use the AfterContentInit lifeCycle hook because we can setup our components and change the data before being initialised.
  ngAfterContentInit() {
    // Create authForm factory = a function that resolves the component
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // Creates this component.
    const component = this.entry.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}