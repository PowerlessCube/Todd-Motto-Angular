// import ComponentRef from Angular Core
import { Component, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="destroyComponent()">
        Destroy
      </button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  //Create a property of component.
  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // Access the component by binding to the class.
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    // access the component bound to class and use destroy() method.
    this.component.destroy();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}