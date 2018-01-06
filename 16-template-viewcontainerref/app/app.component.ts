import { Component, TemplateRef, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  // Learn how to dynamically use a custome template.
  template: `
    <div>
      <div #entry></div>
      <template #tmpl>
        Todd Motto : England, UK
      </template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  // Using our template reference and importing TemplateRef<any>
  // Instantiate the custom template.
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    // Inject it into the entry div 
    this.entry.createEmbeddedView(this.tmpl);
  }

}